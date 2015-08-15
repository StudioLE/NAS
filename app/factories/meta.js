'use strict'

angular.module('app.metaFactory', [])

/*****************************************************************
*
* Meta factory
*
******************************************************************/
.factory('Meta', function($resource, Config) {
  var Meta = {
    title: 'Home'
  }

  return {

    get: function(key) {
      return Meta[key] + ' | ' + Config.title
    },

    set: function(key, value) {
      Meta[key] = value
    }

  }
})
