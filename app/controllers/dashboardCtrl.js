(function(){
angular.module('sfm').controller('dashboardCtrl', ['$scope','$location', function ($scope,$location) {
	var vm=this;
	vm.nosearch=false;

	$scope.results="";

	$scope.Addresss={
		"12345":{
			"StreetNo":"20",
			"Lane":"Churchill street",
			"City":"Chicago"
		}
	};

	$scope.permitnumber="12345";

	$scope.inspection={
		permitnumber:"",
		readyforInspection:"",
		Address:{}
	}

	$scope.inspectQue={agreed:""};

	$scope.agreeOptions=[
		{id:"yes","displayname":"Can Inspect"},
		{id:"no","displayname":"Cannot Inspect"}
	];

	$scope.searchAddress=function(){
		if(angular.isDefined($scope.Addresss[$scope.permitnumber])){
			 $scope.results=$scope.Addresss[$scope.permitnumber];
			$scope.results.permitnumber=angular.copy($scope.permitnumber);
			$scope.inspection.Address=angular.copy($scope.results);
		}
		else
			$scope.results={" ":"No relevent data Found"}
	};

	$scope.startInspection=function(){
		if(angular.equals($scope.inspection.readyforInspection, "yes")){
			$location.path("/inspection");
		}else{

		}
	};

}]);
})();