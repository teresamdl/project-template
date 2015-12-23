var app = angular.module('cwApp', []);
app.controller('cwCtrl', function($scope) {
                                                            $scope.default_user = { firstname: "Francisco", lastname: "Pereira"};
                                                            $scope.reset_form = function() {
                                                                           $scope.user = angular.copy($scope.default_user);
                                                            };
                                                            $scope.reset_form();
                                                            
                                                            $scope.fullname = function() {
                                                                           return $scope.user.firstname + " " + $scope.user.lastname;
                                                            };
                                                            $scope.count = 0;
                                             });
                                             
app.controller('coursesCtrl', function($scope, $http){
               $http.get("http://127.0.0.1:8090/cwData.json").then(function(response) {
                                             $scope.courses = response.data.courses;
               });
});
