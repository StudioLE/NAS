'use strict';

angular.module('app.config', [])

/*****************************************************************
*
* Configuration
*
******************************************************************/
.constant('Config', {
  api_url: 'http://wp.nas.xysti.net/wp-json/wp/v2',
  api: function(req) {
    return this.api_url + req
  }
})
