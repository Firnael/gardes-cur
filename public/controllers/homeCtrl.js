(function() {
    'use strict';

    angular
        .module('app')
        .controller('homeCtrl', HomeCtrl);

        HomeCtrl.$inject = ['$routeParams', 'PersonSvc'];

    function HomeCtrl($routeParams, PersonSvc){
        var vm = this;
        vm.getPersons = getPersons;
        activate();

        //////////////

        function activate() {
          console.log('HomeCtrl activate');
          vm.getPersons();
        }

        function getPersons() {
          PersonSvc.getAll().then(function (result) {
            console.log(result);
          });
        }
    }
})();
