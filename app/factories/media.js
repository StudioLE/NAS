'use strict'

angular.module('app.mediaFactory', [])

/*****************************************************************
*
* Page factory
*
******************************************************************/
.factory('Media', function($resource, Config) {
  return $resource(Config.endpoint('wp', '/media/:id'), {}, {
    get: { method: 'GET', isArray: true }
  })
})
