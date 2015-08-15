angular.module('app.meta', [])

.controller('NavCtrl', function($scope, $location) {

  $scope.nav = [{
    url: '#/events',
    title: 'Events'
  },
  {
    url: '#/projects',
    title: 'Projects'
  },
  {
    url: '#/about',
    title: 'About'
  }]

  $scope.navClass = function(href) {
    return href === '#' + $location.path() ? 'active' : '';
  }

})

.controller('HeadCtrl', function($scope, Meta) {

  $scope.title = Meta.get('title')

})
