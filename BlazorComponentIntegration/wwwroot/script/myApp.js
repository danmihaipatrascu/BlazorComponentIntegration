
var initIndex = 0;

function reinitAngular() {
    console.log('reinitAngular called');

    var injector = $('[ng-app]').injector();
    var $compile = injector.get('$compile');
    var $rootScope = injector.get('$rootScope');
    var appElement = $('[ng-app]');
    $compile(appElement)($rootScope);

    //digest should be done only the first time
    if (initIndex > 0)
        return;
    initIndex++;
    $rootScope.$digest();
}

var app = angular.module('myApp', ['ngRoute']);
app.controller('myCtrl', function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";

});

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/firstPage', {
            templateUrl: 'routedemo/first.html',
            controller: 'routeDemoFirstController'
        })
        .when('/secondPage', {
            templateUrl: 'routedemo/second.html',
            controller: 'routeDemoSecondController'
        })
        .when('/thirdPage', {
            templateUrl: 'routedemo/third.html',
            controller: 'routeDemoThirdController'
        })
        .otherwise({ redirectTo: '/firstPage' });

    //$locationProvider.html5Mode(true);
})  

app.controller("routeDemoFirstController", function ($scope) {
    console.log('routeDemoFirstController');
    $scope.FirstName = "Anubhav";
    $scope.LastName = "Chaudhary";
})
app.controller("routeDemoSecondController", function ($scope) {
    console.log('routeDemoSecondController');
    $scope.MobileNumber = "123456";
    $scope.EmailID = "anu@test.com";
})
app.controller("routeDemoThirdController", function ($scope) {
    console.log('routeDemoThirdController');
    $scope.XXX = "123456";

    $scope.shout = function () {
        console.log('clicked third');
    }
})  