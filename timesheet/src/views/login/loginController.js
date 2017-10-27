angular.module('Login')
.controller('LoginCtrl',['$scope','$location','$rootScope', function ($scope,$location,$rootScope) {
    $scope.login={username:'',passwd:''};
	$scope.submit=function(){
		var isSubmit=true;
		var username=angular.element(document.querySelector('#username'));
		var password=angular.element(document.querySelector('#passwd'));
		if($scope.login.username.length<=3){
			$scope.loginUsername="Invalid Username. Minimum 4 Characters Required!";
			isSubmit=false;
			username.addClass("redBorder");
		}
		else{
			username.removeClass("redBorder");
			$scope.loginUsername=null;
		}
		if($scope.login.passwd.length<3 || $scope.login.passwd.length>10){
			$scope.loginPassword="Invalid Password. Required password length 3 to 10 characters !";
			isSubmit=false;
			password.addClass("redBorder");
		}
		else{
			password.removeClass("redBorder");
			$scope.loginPassword=null;
		}
		if(isSubmit){
			localStorage.setItem("username",$scope.login.username);
			localStorage.setItem("password",$scope.login.passwd);
			$location.path('/success');
		}
	}
}]);

