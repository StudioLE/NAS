'use strict'

angular.module('app.utilFactory', [])

/*****************************************************************
*
* Util factory
*
******************************************************************/
.factory('Util', function() {
  return {

    lightbox: function(modules) {
      $.magnificPopup.open({
        items: _.filter(modules, 'type', 'image'),
        type:'image',
        gallery: {
          enabled: true,
          arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>'
        }
      })
    }

  }
})
