'use strict'

angular.module('app.pageFactory', [])

/*****************************************************************
*
* Page factory
*
******************************************************************/
.factory('Page', function($resource, Config) {
  return $resource(Config.endpoint('wp', '/pages/:id'), {}, {
    get: { method: 'GET', isArray: true }
  })
})
