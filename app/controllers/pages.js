'use strict';

angular.module('app.pages', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/pages/home.html',
    controller: 'PageCtrl'
  });
  $routeProvider.when('/blog', {
    templateUrl: 'views/pages/blog.html',
    controller: 'PageCtrl'
  });
  $routeProvider.when('/events/:id', {
    templateUrl: 'views/pages/event.html',
    controller: 'EventCtrl'
  });
  $routeProvider.when('/events', {
    templateUrl: 'views/pages/events.html',
    controller: 'PageCtrl'
  });
  $routeProvider.when('/portfolios', {
    templateUrl: 'views/pages/portfolios.html',
    controller: 'PageCtrl'
  });
  $routeProvider.when('/contact', {
    templateUrl: 'views/pages/contact.html',
    controller: 'PageCtrl'
  });
  $routeProvider.when('/about', {
    templateUrl: 'views/pages/about.html',
    controller: 'PageCtrl'
  });
  $routeProvider.when('/404', {
    templateUrl: 'views/pages/404.html',
    controller: 'PageCtrl'
  });
}])

.controller('PageCtrl', function($scope, Page, Post) {

  var posts = Post.query()

  var portfolios = [
    {
      title: 'Adam Khan Architects',
      date: '2015-02-12',
      src: 'Arch2o-Synthesis-Design-+-Architecture-SDA-51.jpg'
    },
    {
      title: 'Ryder Architects',
      date: '2014-10-22',
      src: 'Arch2o-Synthesis-Design-+-Architecture-SDA-51.jpg'
    },
    {
      title: 'Peter Gaze Pace Architects',
      date: '2015-01-28',
      src: 'Arch2o-Synthesis-Design-+-Architecture-SDA-51.jpg'
    },
    {
      title: 'ArcSoc Blackwells Discounts',
      date: '2014-10-22',
      src: 'Arch2o-Synthesis-Design-+-Architecture-SDA-51.jpg'
    }
  ]
  
  $scope.posts = function() {
    return posts
  }

  $scope.image = function(image) {
    if(image && image[0]) {
      return image[0]
    }
    return false
  }
  
  $scope.portfolios = function() {
    return portfolios
  }

})

.controller('EventCtrl', function($scope, $routeParams, Post) {

  var post = Post.get($routeParams, function() {
    console.log(post)
    $scope.post = post[0]
  })

  $scope.image = function(image) {
    if(image && image[0]) {
      return image[0]
    }
    return false
  }

})
