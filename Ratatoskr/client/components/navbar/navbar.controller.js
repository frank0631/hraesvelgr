'use strict';

angular.module('ratatoskrApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
      {
        'title': 'Echo',
        'link': '/Echo'
      },
      {
        'title': 'Calculator',
        'link': '/Calculator'
      },
      {
        'title': 'Customer',
        'link': '/Customer'
      }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
