var calendar = angular.module('calendar', ['ui.calendar', 'angularMoment']);

calendar.controller('calendarCtrl', ['$scope', function($scope) {
    $scope.events = [];
    //     {
    //         title: 'OOSD',
    //         start: new Date(y, m, d - 5),
    //         end: new Date(y, m, d - 2)
    //     },
    //     {
    //         title: 'Mobile',
    //         start: new Date(y, m, d - 5),
    //         end: new Date(y, m, d - 2)
    //     }
    // ];
}]);
