(function () {
    'use strict';

    angular
        .module('app')
        .factory('PersonSvc', PersonSvc);

        PersonSvc.$inject = ['$http'];

    function PersonSvc($http) {

      var baseUri = 'http://' + $location.host() + ":" + $location.port();
      var service = {
        getPersons: getPersons
      };
      return service;

      // Get all
      function getPersons(){
        var promise = $http.get(baseUri + "/api/persons/").then(function(response) {
            return response.data;
        });
        return promise;
      }

    }
})();
