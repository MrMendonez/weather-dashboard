(function() {
  angular.module("app.data")
    .factory("weatherSvc", function($http, $q) {
      return {
        find: findByLocation
      }

      function findByLocation(location) {
        var apiKey = "f44bcfdb380db50074574a8d3888ef4c"
        var url = "http://api.openweathermap.org/data/2.5/find?q=" + location + "&APPID=" + apiKey ;
        var defer = $q.defer();

        $http.get(url)
          .success(function(response) {
            defer.resolve(response);
          })
          .error(function(err) {
            defer.reject(err)
          })

        return defer.promise;
      }
    });
})();