/* globals bl */


var app =angular.module('prjApp', []);

app.controller('MainCtrl', function($scope, $http){
	
		$http.get("http://localhost:9000/getPatients").then(function(response) {
		$scope.patients = response.data;
	});

		$http.get("http://localhost:9000/getRequests").then(function(response) {
		$scope.requests = response.data;
	});

		$http.get("http://localhost:9000/getActs").then(function(response) {
		$scope.acts = response.data;
	});
 


	$scope.showFirstPage=true;
	$scope.showSecondPage=false;
	$scope.shoeThirdPage=false;

	$scope.newAct=false;
		
	$scope.secondPage = function (user, pass){

		$http.post("http://localhost:9000/postLogIn", {user: user, pass: pass}).then(function(response) {
			$scope.logIn = response.data;

			if($scope.logIn){
			$scope.showFirstPage=false;
			$scope.showThirdPage=false;
			$scope.showSecondPage=true;
		}
		});
	
		
	}
	
	$scope.thirdPage = function(c){
		
		$scope.patients = c.name;
		$scope.policy_n = c.policy_number;		
	   $scope.policy_t = c.policy_type;
		$scope.patient_id = c.patID;
	
		$scope.showFirstPage=false;
		$scope.showSecondPage=false;
		$scope.showThirdPage=true;
		}
	
	$scope.tableActs=[];	
	
	$scope.addMedAct = function(a){

		$http.get("http://localhost:9000/getReimb").then(function(response) {
		$scope.reimb = response.data;
	});
	
		$scope.actName = a.name;
		$scope.actId = a.actID;		
	   $scope.actCost = a.cost;
		
		var r = eval($scope.reimb);

		for(var i=0;i<$scope.reimb.length;i++){
			
			if($scope.policy_t === r[i].policy_type){
				$scope.Reimb = r[i].reimb_percentage;
			}
		}
		
		$scope.tableActs.push({ 'actId': $scope.actId, 'actName': $scope.actName, 'actCost': $scope.actCost, 'Reimb': $scope.Reimb});
	}

	$scope.addAct = function (){
		$scope.newAct = true;
	}

	$scope.hideAct = function (){
		$scope.newAct=false;
	}
	
	

	
	
			   
});


