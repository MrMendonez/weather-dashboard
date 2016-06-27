(function() {
  // debugger;
	var name = "app",
		requires = [
      "app.shell",
      "app.search"
    ];

	angular.module(name, requires)
    .run(['$route', function($route) {
      $route.reload();
    }]);
})();