angular.module('sfm', ['ngRoute','ui.bootstrap','camera']).config(['$locationProvider', '$routeProvider', '$httpProvider', function ($locationProvider, $routeProvider, $httpProvider) {
	 $routeProvider.
	 when("/",{
	 	controller:"loginCtrl",
	 	templateUrl:"views/login.tpl.html"
	 }).
	 when("/dashboard",{
	 	controller:"dashboardCtrl",
	 	templateUrl:"views/dashboard.tpl.html"
	 }).
	 when("/inspection",{
	 	controller:"inspectionCtrl",
	 	templateUrl:"views/inspection.tpl.html"
	 }).
	 when("/inspection/reviseEdit",{
	 	controller:"reviewCtrl",
	 	templateUrl:"views/reviewEdit.tpl.html"
	 }).
	 otherwise({ redirectTo: '/' })
}]);