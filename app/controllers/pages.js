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

.controller('PageCtrl', function($scope) {

  var events = [
    {
      title: 'Adam Khan Architects',
      date: '2015-02-12',
      src: '10983316_602085633258065_945888742273676366_o.jpg'
    },
    {
      title: 'Ryder Architects',
      date: '2014-10-22',
      src: '10506752_542202572579705_2896804019507899036_o.jpg'
    },
    {
      title: 'Peter Gaze Pace Architects',
      date: '2015-01-28',
      src: '10903951_591659480967347_45747217307958360_o.jpg'
    },
    {
      title: 'ArcSoc Blackwells Discounts',
      date: '2014-10-22',
      src: '1052917_367250010074963_1580767482_o.jpg'
    }
  ]

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
  
  $scope.events = function() {
    // return User.get()
    return events
  }
  
  $scope.portfolios = function() {
    // return User.get()
    return portfolios
  }


  

});
