var app = angular.module('app', []);

	app.controller('usersCtrl', function($scope, $http){
		$http({
			method: "GET",
			url: "users.json"
		}).then(function (res){
				$scope.usersData = res.data.records;
			});
	});



/*app.controller('usersCtrl', function($scope, $http) {
 $http({
     method:'GET',
     url : 'js/users.json'
 }).then(function (response) {
     $scope.usersData = response.data.records;
     
 } ,
        function errorCallback(response){
     console.log("Failure");
     console.error(response);
 });
});*/