var app = angular.module("dogpark", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/",
        {
            templateUrl: "src/login.html",
            controller: "loginController"
        })
        .when("/home",
        {
            templateUrl: "src/home.html",
            controller: "homeController"
        })
        .when("/register", {
            templateUrl: "src/register.html",
            controller: "loginController"
        })
        .otherwise("/");
}]);
