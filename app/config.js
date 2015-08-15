'use strict';

angular.module('app.config', [])

/*****************************************************************
*
* Configuration
*
******************************************************************/
.constant('Config', {
  title: 'Northumbria Architecture Society',
  apis: {
    wp: 'http://wp.nas.xysti.net/wp-json/wp/v2',
    projects: 'http://wp.nas.xysti.net/projects-api.php'
  },
  endpoint: function(api, path) {
    return this.apis[api] + path
  }
})
