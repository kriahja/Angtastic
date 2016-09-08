'use strict';

/**
 * @ngdoc overview
 * @name heartApp
 * @description
 * # heartApp
 *
 * Main module of the application.
 */
angular
  .module('heartApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/playground', {
        templateUrl: 'views/playground.html',
        controller: 'PlaygroundCtrl',
        controllerAs: 'playground'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
