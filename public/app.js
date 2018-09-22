angular.module("app", ['ngRoute', 'ngAnimate', 'ngMaterial', 'ngMessages', 'timer', 'chart.js'])
    .service('authInterceptor', function($q) {
      var service = this;
      service.responseError = function(rejection) {
        if (rejection.status === 401) {
          window.location = "/";
        }
        return $q.reject(rejection);
      };
    })
    .config(function($routeProvider, $httpProvider) {
      $httpProvider.interceptors.push('authInterceptor');

      $routeProvider
          .when("/", {
              templateUrl: "views/home.html",
              controller: "homeCtrl",
              controllerAs: "vm",
          })
          .otherwise({
              redirectTo: "/"
          });
    })
    .run(function ($rootScope) {
    });
