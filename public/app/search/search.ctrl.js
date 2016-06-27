(function() {
  angular.module("app.search")
    .controller("Search", function($scope) {
        $scope.$on("search", search);

        function search(evt, data) {
          console.log(data.str);
        }
    });
})();