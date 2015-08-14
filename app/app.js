'use strict';

/*****************************************************************
*
* Declare app level module which depends on views, and components
*
******************************************************************/
angular.module('app', [
  'ngSanitize',
  'ngResource',
  'ngRoute',
  'navList',
  'app.config',
  'app.pages',
  'app.mediaFactory',
  'app.pageFactory',
  'app.postFactory',
  'app.projectFactory'
])

/*****************************************************************
*
* Route provider
*
******************************************************************/
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/404'});
}])

/*****************************************************************
*
* Lodash
*
******************************************************************/
.constant('_', window._)
