'use strict';

angular.module('app.dashboard', ['ngRoute'])


/*****************************************************************
*
* Route provider
*
******************************************************************/
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'views/dashboard.html',
    controller: 'DashboardCtrl'
  });
}])

/*****************************************************************
*
* DashboardCtrl controlller
*
******************************************************************/
.controller('DashboardCtrl', function($scope) {

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
  
  $scope.events = function() {
    // return User.get()
    return events
  }

  $scope.errors = []

});
