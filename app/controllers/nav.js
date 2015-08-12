angular.module('navList', [])

.controller('navCtrl', function($scope, $location) {
  $scope.navClass = function(href) {
    return href === '#' + $location.path() ? 'active' : '';
  };

  $scope.nav = [{
    url: '#/blog',
    title: 'Blog'
  },{
    url: '#/events',
    title: 'Events'
  },{
    url: '#/portfolios',
    title: 'Portfolios'
  }, {
    url: '#/about',
    title: 'About'
  }]

  $scope.navView = function() {
    return 'views/nav.html'
  }
  
});
