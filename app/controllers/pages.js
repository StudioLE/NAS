'use strict';

angular.module('app.pages', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/pages/home.html',
    controller: 'HomeCtrl'
  });
  $routeProvider.when('/events/:id', {
    templateUrl: 'views/pages/event.html',
    controller: 'EventCtrl'
  });
  $routeProvider.when('/events', {
    templateUrl: 'views/pages/events.html',
    controller: 'EventsCtrl'
  });
  $routeProvider.when('/projects', {
    templateUrl: 'views/pages/projects.html',
    controller: 'ProjectsCtrl'
  });
  $routeProvider.when('/contact', {
    templateUrl: 'views/pages/contact.html',
    controller: 'MiscCtrl'
  });
  $routeProvider.when('/about', {
    templateUrl: 'views/pages/about.html',
    controller: 'MiscCtrl'
  });
  $routeProvider.when('/404', {
    templateUrl: 'views/pages/404.html',
    controller: 'MiscCtrl'
  });
}])

.controller('MiscCtrl', function($scope) {

})

.controller('HomeCtrl', function($scope, $timeout, Page, Post, Project) {

  var posts = Post.query({
    limit: 5
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

  var projects = []

  Project.query(function(res) {
    projects = res.projects
  })
  
  $scope.projects = function() {
    return projects
  }

  $scope.$watch('projects', function(newValue, oldValue) {
    $timeout(function() {
      $('.projects').magnificPopup({
        delegate: 'a[rel~="lightbox"]',
        // verticalGap: 150,
        // items:
        type:'image',
        gallery: {
          // options for gallery
          enabled: true,
          arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>'
        },
        callbacks: {
          open: function() {
            // Get instance (after popup was opened)
            var mfp = $.magnificPopup.instance

            // Modify the items array
            mfp.items = _.filter(projects[mfp.index].modules, 'type', 'image')

            // Call update method to refresh counters (if required)
            mfp.updateItemHTML()
          }
        }
      })
    })
  })

})

.controller('EventCtrl', function($scope, $routeParams, Post) {

  var post = Post.get($routeParams, function() {
    $scope.post = post[0]
  })

  $scope.image = function(image) {
    if(image && image[0]) {
      return image[0]
    }
    return false
  }

})

.controller('EventsCtrl', function($scope, Post) {

  var posts = Post.query({
    limit: 11
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

})

.controller('ProjectsCtrl', function($scope, $timeout, Project) {

  var projects = []

  Project.query(function(res) {
    projects = res.projects
  })

  $scope.projects = function() {
    return projects
  }

  $scope.$watch('projects', function(newValue, oldValue) {
    $timeout(function() {
      $('.projects').magnificPopup({
        delegate: 'a[rel~="lightbox"]',
        // verticalGap: 150,
        // items:
        type:'image',
        gallery: {
          // options for gallery
          enabled: true,
          arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>'
        },
        callbacks: {
          open: function() {
            // Get instance (after popup was opened)
            var mfp = $.magnificPopup.instance

            // Modify the items array
            mfp.items = _.filter(projects[mfp.index].modules, 'type', 'image')

            // Call update method to refresh counters (if required)
            mfp.updateItemHTML()
          }
        }
      })
    })
  })

})


