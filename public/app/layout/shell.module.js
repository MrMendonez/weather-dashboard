(function() {
  var name = "app.shell",
    requires = ["ngRoute"];

    angular.module(name, requires)
      .config(function($routeProvider) {
        $routeProvider
          .when("/search", {
            templateUrl: "app/search/search.html",
            controller: "Search"
          })
        .otherwise({
          redirectTo: "/search"
        })
      })
})();