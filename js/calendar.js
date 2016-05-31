var calendar = angular.module('calendar', ['ui.calendar']);

calendar.controller('calendarCtrl', ['$scope', function($scope) {
    $scope.eventSources = [
      {
        title: 'Draggable event',
        type: 'warning',
        //startsAt: moment().startOf('month').toDate()
      },
      {
        title: 'Non-draggable event',
        type: 'info',
        //startsAt: moment().startOf('month').add(1, 'day').toDate()
      }
    ];
}]);
