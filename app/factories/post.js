'use strict'

angular.module('app.postFactory', [])

/*****************************************************************
*
* Post factory
*
******************************************************************/
.factory('Post', function($resource, Config) {
  return $resource(Config.endpoint('wp', '/posts?filter[name]=:id&filter[posts_per_page]=:limit'), {
    limit: 9
  }, {
    get: {
      method: 'GET',
      isArray: true
    }
  })
})
