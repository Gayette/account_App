console.log("app.js");

var app = angular.module('app', []);

	app.controller('usersCtrl', function($scope, $http) {
		$http({
			method: "GET",
			url: "json/users.json"
		}).then(function (response) {
				$scope.usersData = response.data.records;
	} ,

        function errorCallback(response) {
     console.log("Failure");
     console.error(response);		
  });
});




