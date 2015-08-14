'use strict'

angular.module('app.postFactory', [])

/*****************************************************************
*
* Post factory
*
******************************************************************/
.factory('Post', function($resource, Config) {
  return $resource(Config.api('/posts?filter[name]=:id'), {}, {
    get: { method: 'GET', isArray: true }
  })
})
