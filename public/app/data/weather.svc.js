var apiKey = "f44bcfdb380db50074574a8d3888ef4c";

(function() {
  angular.module("app.data")
    .factory("weatherSvc", function($http, $q) {
      return {
        find: findByLocation,
        getCurrent: getCurrentWeather
      }

      function findByLocation(location) {
  
        var url = "http://api.openweathermap.org/data/2.5/find?q=" + location + "&appid=" + apiKey;
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

      function getCurrentWeather(id) {
        console.log("id is ", id)
        var defer = $q.defer();

        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + id + "&appid=" + apiKey;


        // http://api.openweathermap.org/data/2.5/weather?q=London&appid=725ea364b7228120fc098da2cba79b0c


        $http.get(url)
          .success(function(response) {

            // var xmlData = xmlToJson(response);

            defer.resolve(response);
          })
          .error(function(err) {
            defer.reject(err);
          })

        return defer.promise;
      }; // end getCurrentWeather()

      // // Changes XML to JSON
      // function xmlToJson(xml) {
        
      //   // Create the return object
      //   var obj = {};

      //   if (xml.nodeType == 1) { // element
      //     // do attributes
      //     if (xml.attributes.length > 0) {
      //     obj["@attributes"] = {};
      //       for (var j = 0; j < xml.attributes.length; j++) {
      //         var attribute = xml.attributes.item(j);
      //         obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      //       }
      //     }
      //   } else if (xml.nodeType == 3) { // text
      //     obj = xml.nodeValue;
      //   }

      //   // do children
      //   if (xml.hasChildNodes()) {
      //     for(var i = 0; i < xml.childNodes.length; i++) {
      //       var item = xml.childNodes.item(i);
      //       var nodeName = item.nodeName;
      //       if (typeof(obj[nodeName]) == "undefined") {
      //         obj[nodeName] = xmlToJson(item);
      //       } else {
      //         if (typeof(obj[nodeName].push) == "undefined") {
      //           var old = obj[nodeName];
      //           obj[nodeName] = [];
      //           obj[nodeName].push(old);
      //         }
      //         obj[nodeName].push(xmlToJson(item));
      //       }
      //     }
      //   }
      //   return obj;
      // };

    });
})();