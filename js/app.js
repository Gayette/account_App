
var app = angular.module('app', []);

app.controller('usersCtrl', function($scope, $http) {
    $http({
        method:'GET',
        url: 'json/users.json'

    }).then(function (response) {
        $scope.usersData = response.data.records;

        $scope.tablUsers = [];
        for ($user in $scope.usersData) {
            $scope.tablUsers[$scope.usersData[$user].Id]
             = $scope.usersData[$user].username;
        }
    },
        function errorCallback(response){
        console.log("Failure");
        console.error(response);
    });
});



app.controller('depenseCtrl', function($scope, $http) {
    $http({
        method:'GET',
        url: 'json/depenses.json'

    }).then(function (response) {
        $scope.depenseData = response.data.records;
     
    },
        function errorCallback(response){
        console.log("Failure");
        console.error(response);
    });
});
