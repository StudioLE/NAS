'use strict'

angular.module('app.mediaFactory', [])

/*****************************************************************
*
* Page factory
*
******************************************************************/
.factory('Media', function($resource, Config) {
  return $resource(Config.api('/media/:id'), {}, {
    get: { method: 'GET', isArray: true }
  })
})
