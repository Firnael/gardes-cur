(function() {
    'use strict';

    angular
        .module('app')
        .controller('homeCtrl', HomeCtrl);

        HomeCtrl.$inject = ['$routeParams', 'PersonSvc'];

    function HomeCtrl($routeParams, PersonSvc){
        var vm = this;
        var person = {};
        person.name = "John";
        person.email = "john.doe@mail.com";
        vm.person = person;

        vm.getPersons = getPersons;
        vm.createPerson = createPerson;
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

        function createPerson(personToCreate) {
          console.log(personToCreate);
          PersonSvc.save(personToCreate).then(function (result) {
            console.log(result);
          });
        }
    }
})();
