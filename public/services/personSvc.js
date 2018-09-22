(function () {
    'use strict';

    angular
        .module('app')
        .factory('PersonSvc', PersonSvc);

        PersonSvc.$inject = ['$http', '$location'];

    function PersonSvc($http, $location) {

      var baseUri = 'http://' + $location.host() + ":" + $location.port();
      var service = {
        getAll: getAll
      };
      return service;

      // Get all
      function getAll(){
        var promise = $http.get(baseUri + "/api/person").then(function(response) {
            return response.data;
        });
        return promise;
      }

    }
})();
