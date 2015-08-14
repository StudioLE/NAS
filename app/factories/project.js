'use strict'

angular.module('app.projectFactory', [])

/*****************************************************************
*
* Post factory
*
******************************************************************/
.factory('Project', function($resource, Config) {
  return $resource(Config.endpoint('projects', '/projects/:id'), {}, {
    query: { method: 'GET', isArray: false }
  })
})
