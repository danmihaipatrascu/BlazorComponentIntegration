
function reinitAngular() {
    console.log('reinitAngular called');
    var injector = $('[ng-app]').injector();
    var $compile = injector.get('$compile');
    var $rootScope = injector.get('$rootScope');
    var appElement = $('[ng-app]');
    $compile(appElement)($rootScope);
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
        });

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