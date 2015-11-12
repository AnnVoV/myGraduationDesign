'use strict';
/* scss文件也要通过引入才能进行编译*/

/*
 * 注意, webpack会把引入的scss文件全部都打包到一起，我估计被重复用到的内容它会单独打包到一个文件中
 * 并且把scss编译为css 文件的命名方式应该是根据脚本的名字吧（猜测 这一点有待于测试）。。。。。
 */
require('../scss/sprite.scss');
require('../scss/index.scss');
require('../scss/content.scss');
/* 上面这两句最终会编译成index.css 文件 */
/* js 引入 */
require('angular');
/* 因为我们使用了动画模块 */
require('angularAnimation');
require('route');
require('./appControllers.js');
require('./appService.js');
require('./appDirective.js');


//我们把controller 部分，directive部分， service部分 分别分开引入进来
var myApp = angular.module('myApp', ['appService', 'ngAnimate', 'ngRoute', 'appControllers', 'appDirective']);

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    //设置路由模式为H5模式
    $locationProvider.html5Mode(true);
    //content/index 页面根据导航tab进行切换,tab 包括阅读,视听,发现三个功能
    $routeProvider
        .when('/public/content', {
            template: '<h1>{{title}}</h1><section-dir ng-repeat="item in sectionArr"></section-dir>',
            controller: 'contentDetailControl'
        })
        .when('/public/read', {
            template: '<h1>{{title}}</h1><div ng-show="sectionArr.length==0" class="f-tip">很抱歉，没有找到相关阅读资源</div><section-dir ng-repeat="item in sectionArr"></section-dir>',
            controller: 'contentDetailControl'
        })
        .when('/public/video', {
            template: '<h1>{{title}}</h1><div ng-show="videoArr.length==0" class="f-tip">很抱歉，没有找到相关视频资源</div><video-dir ng-repeat="item in videoArr"></video-dir>',
            controller: 'contentDetailControl'
        })
        .when('/public/find', {
            template: '<h1>{{title}}</h1><div ng-show="findArr.length==0" class="f-tip">很抱歉，没有找到相关发现资源</div><find-dir ng-repeat="item in findArr"></find-dir>',
            controller: 'contentDetailControl'
        });
}]);

//设置一个过滤器
myApp.filter('to_trusted', ['$sce', function($sce){
    return function(text){
        return $sce.trustAsHtml(text);
    };
}]);



