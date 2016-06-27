(function() {
  // debugger;
	var name = "app",
		requires = [
      "app.shell",
      "app.search",
      "app.weather"
    ];

	angular.module(name, requires)
    .run(['$route', function($route) {
      $route.reload();
    }]);
})();