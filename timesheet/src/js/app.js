'use strict';

angular.module('Login', []);
angular.module('Success', []);

angular.module('timesheetApp', ['Login','Success','ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/login', {
            controller: 'LoginCtrl',
            templateUrl: 'views/login/login.html',
            hideMenus: true
     })
	.when('/success', {
		controller: 'SuccessCtrl',
        templateUrl : 'views/loginSuccess.html'
    })
	.otherwise({ redirectTo: '/login' });
}])
.run(['$rootScope','$location', function($rootScope,$location){
	if("username" in localStorage){
		$location.path("/success");
	}
}]);