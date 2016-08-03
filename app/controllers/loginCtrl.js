(function(){
angular.module('sfm').controller('loginCtrl', ['$scope','$location', function ($scope,$location) {
	var vm=this;

	$scope.navToDashboard=function(){
		$location.path("/dashboard");
	}
}]);
})();