/* globals bl */


var app =angular.module('prjApp', []);

app.controller('MainCtrl', function($scope, $http){
	
		$http.get("http://localhost:9000/getPatients").then(function(response) {
		$scope.patients = response.data;
	});

		$http.get("http://localhost:9000/getRequests").then(function(response) {
		$scope.requests = response.data;
	});



	$scope.showFirstPage=true;
	$scope.showSecondPage=false;
	$scope.shoeThirdPage=false;
		
	$scope.secondPage = function (){
	$scope.showFirstPage=false;
	$scope.showThirdPage=false;
	$scope.showSecondPage=true;
	}
	
	$scope.gotothird = function(c){
		$scope.patients = c.name;
		$scope.policy = c.policy_number;
		$scope.policytype = c.policy_type;
		$scope.patid = c.patID;
		$scope.showFirstPage=false;
		$scope.showSecondPage=false;
		$scope.showThirdPage=true;
		}
			   
});


