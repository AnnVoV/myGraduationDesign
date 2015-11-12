var appService = angular.module('appService', []);

appService
    //构建了一个listModel 的service
    .factory('listModel', ['$http', function ($http) {
        return {
            getItems: function (url) {
                //url: '../api/list.json'
                return $http.get(url);
            }
        };
    }]);