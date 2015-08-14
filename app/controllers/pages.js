'use strict';

angular.module('app.pages', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/pages/home.html',
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
  $routeProvider.when('/projects', {
    templateUrl: 'views/pages/projects.html',
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

.controller('PageCtrl', function($scope, Page, Post, Project) {

  var posts = Post.query()
  var projects = []

  Project.query(function(res) {
    projects = res.projects
  })
  
  $scope.posts = function() {
    return posts
  }

  $scope.image = function(image) {
    if(image && image[0]) {
      return image[0]
    }
    return false
  }
  
  $scope.projects = function() {
    return projects
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
