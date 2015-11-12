var appDirective = angular.module('appDirective', []);

appDirective
    .directive('sectionDir', ['$timeout', function ($timeout) {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: '/public/partials/content_section.html',
            link: function ($scope, elem, attrs) {
                $scope.foldOn = function (e) {
                    var $elm = angular.element(e.srcElement);
                    $elm.css('color', '#42c229');

                    $timeout(function () {
                        $scope.isHide = false;
                        $elm.css('color', '#000');
                    }, 200);
                };

                $scope.foldOff = function (e) {
                    var $elm = angular.element(e.srcElement);
                    $elm.css('color', '#42c229');

                    $timeout(function () {
                        $scope.isHide = true;
                        $elm.css('color', '#000');
                    }, 200);
                };
            }
        };
    }])
    .directive('videoDir', function () {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: '/public/partials/video_section.html'
        };
    })
    .directive('findDir', function () {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: '/public/partials/find_section.html'
        };
    });