'use strict';
 
angular.module('Success')
 
.controller('SuccessCtrl',['$scope','$location',function ($scope,$location) {
	$scope.sessionUsername=localStorage.username;
		$scope.signOut=function(){
			localStorage.removeItem("username");
			localStorage.removeItem("password");
			$location.path("/login");
		}
}]);