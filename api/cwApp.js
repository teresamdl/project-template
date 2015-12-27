var app = angular.module('cwApp', []);
		app.controller('cwCtrl', function($scope) {
/* 			$scope.firstname = "Teresa";
			$scope.lastname = "Lopes"; */
			$scope.default_user = {firstname: "Teresa", lastname: "Lopes"};
			$scope.reset_form = function() {
				$scope.user = angular.copy($scope.default_user);
			};
			$scope.reset_form();
			
			/* $scope.user = {firstname: "Teresa", lastname: "Lopes"}; */
			$scope.fullname = function() {
				return $scope.user.firstname + " " + $scope.user.lastname;
				};
			$scope.count=0;
			});
			
/* app.controller ('coursesCtrl', function($scope){
	$scope.courses=[
		{abbrev:'CW', name:'Web Computation'},
		{abbrev:'BA', name:'Business Analyitics'},
		{abbrev:'DB', name:'Databases'}
	];
});	
 */
 
 
 app.controller('coursesCtrl', function($scope, $http){
	 $http.get("http://127.0.0.1:8090/cwData.json").then(function(response){
		 $scope.courses = response.data.courses;
	 });
 });