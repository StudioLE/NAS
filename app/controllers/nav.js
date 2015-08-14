angular.module('navList', [])

.controller('navCtrl', function($scope, $location) {
  $scope.navClass = function(href) {
    return href === '#' + $location.path() ? 'active' : '';
  };

  $scope.nav = [{
    url: '#/events',
    title: 'Events'
  },{
    url: '#/projects',
    title: 'Projects'
  }, {
    url: '#/about',
    title: 'About'
  }]

  $scope.navView = function() {
    return 'views/nav.html'
  }
  
});
