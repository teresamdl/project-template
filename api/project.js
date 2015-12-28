var app = angular.module('project', []);

 app.controller('patientsCtrl', function($scope, $http){
	 $http.get("https://raw.githubusercontent.com/sise-cweb/data-gen/master/patients.json").then(function(response){
		 $scope.patients = response.data;
	 });
 });


  app.controller('requestCtrl', function($scope, $http){
 	 $http.get("https://raw.githubusercontent.com/sise-cweb/data-gen/master/requests.json").then(function(response){
 		 $scope.request = response.data;
 	 });
  });
