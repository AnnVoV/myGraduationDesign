'use strict';
/* 使用绘制树状图的脚本 */
var TreeAPI = require('./tree.js');

/*我们把controller 相关的都放到这里*/
var appControllers = angular.module('appControllers', []);

/*
 * app首页页面的index.html的controller
 * */
appControllers.controller('myControl', ['$scope', 'listModel', function ($scope, listModel) {
    listModel
        .getItems('public/api/list.json')
        .then(function (data) {
            var json_data = data.data;
            $scope.listArr = json_data;
        }, function () {
            console.log('error...');
        });
}]);

/*
 * category/index 页面的controller
 * */
/*appControllers.controller('categoryControl', ['$scope', function ($scope) {

}]);*/

/**
 * content/index 根据目录列表单击后的内容详情页面
 */
appControllers.controller('contentControl', ['$scope', 'listModel', function ($scope, listModel) {
    console.log('enter into /public/category page...');

    $scope.urlBack = function(){
      alert('url back!');
    };

    //获取相关数据列表，形成目录
    listModel
        .getItems('public/api/category_earth.json')
        .then(function (data) {
            var json_data = data.data;
            $scope.categoryArr = json_data.categoryArr;
            $scope.title = json_data.title;
        }, function () {
            console.log('error....');
        }).finally(function(){
            $scope.isLoaded = true;
        })
}]);


appControllers.controller('contentDetailControl', ['$scope', 'listModel', '$routeParams', '$location', function ($scope, listModel, $routeParams, $location) {
    //根据我们的categoryName 来获取对应的具体信息

    //这里不知道为什么直接在<a>上绑定window.history.back没有效果
    $scope.reloadIndex = function(){
        window.location.href = "/public/category/";
    };

    var paramObj = $location.search(),
        category_name = paramObj.category,
        api_url = "public/api/" + category_name + '.json';

    //因为中文经过了编码 所以要通过decodeURI进行解码
    //api_url = decodeURI(api_url);

    if(!category_name)return;//如果不是通过路由传递进来的直接退出
    console.log('api:', api_url);

    listModel.getItems(api_url)
        .then(function (data) {
            var json_data = data.data;

            if (!json_data.title) {
                //说明先载入树状图,进入树状图页面
                window.location.href = '/public/tree?category=' + category_name;
            } else {
                $scope.isInitHide = false;
                //直接呈现具体内容页面
                $scope.title = json_data.title;
                $scope.sectionArr = json_data.read;
                $scope.videoArr = json_data.video;
                $scope.findArr = json_data.find;



                $scope.isLoaded = true;
            }
        }, function (err) {
            console.log('error....');
        })
        .finally(function(){
           //$scope.isLoaded = true;
        });
}]);

/**
 * 树状图页面的controller
 */
appControllers.controller('treeControl', ['$scope', '$http', '$location', '$timeout', 'listModel', function ($scope, $http, $location, $timeout, listModel) {
    var paramObj = $location.search(),
        category_name = paramObj.category,
        api_url = "public/api/" + category_name + '.json';


    //点击叶子后相关的回调处理方法
    var callBackHandler = function(fileName){
        $timeout(function(){
            window.location.href = '/public/content?category='+fileName;
        },300);
    };


    $scope.urlBack = function(){
        //回退
        window.location.href = '/public/category/';
    }

    listModel.getItems(api_url)
        .then(function (data) {
            var json_data = data.data;
            var title_center = json_data.centerTitle;
            var title_arr = json_data.sectionArr;
            var param_data  = {
                jsonData: json_data
            };

           //调用绘制树状图的api
           TreeAPI.drawTree('canvas', 105, 31, title_arr.length, title_arr, callBackHandler.bind(param_data));
           TreeAPI.drawCenterText('canvas', title_center);

        }, function (err) {
            console.log(err);
        });
}]);
