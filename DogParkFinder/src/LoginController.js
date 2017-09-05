app.controller("loginController", ["$scope", "$http", "$location", function ($scope, $http, $location) {
            $scope.username = "";
            $scope.password = "";

            $scope.login = function () {
                $http({
                    method: 'POST',
                    url: "/Token",
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    transformRequest: function (obj) {
                        var str = [];
                        for (var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    },
                    data: { grant_type: "password", username: $scope.username, password: $scope.password }
                })
                    .then(function (result) {
                        console.log("result=", result);
                        sessionStorage.setItem('token', result.data.access_token);

                        $location.path("/home");
                    });
            }
            
            $scope.registerUsername = "";
            $scope.registerPassword = "";
            $scope.confirmPassword = "";
            $scope.firstName = "";
            $scope.lastName = "";

             $scope.register= function() {
                $http({
                    method: 'POST',
                    url: "api/account/register",
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    transformRequest: function (obj) {
                        var str = [];
                        for (var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    },
                    data: { Email: $scope.registerUsername, Password: $scope.registerPassword, ConfirmPassword: $scope.confirmPassword, FirstName: $scope.firstName, LastName: $scope.lastName }
                })
                    .then((response) => {
                        login($scope.username, $scope.password);
                    }, (reject) => {
                        alert(reject.data.Message);
                    });
            };
        }
]);