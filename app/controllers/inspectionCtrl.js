(function(){
	angular.module('sfm').controller('inspectionCtrl', ['$scope','$location', function ($scope,$location) {
		

		$scope.startInspection=function(){
			$location.path("/inspection/reviseEdit");
		}

	}]);
})();