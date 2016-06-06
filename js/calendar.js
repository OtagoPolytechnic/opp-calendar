var calendar = angular.module('calendar', ['ui.calendar', 'angularMoment']);

calendar.controller('calendarCtrl', ['$scope', function($scope) {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    /* config object */
    $scope.uiConfig = {
        calendar:{
            height: 600,
            editable: true,
            header:{
                left: 'month agendaWeek agendaDay',
                center: 'title',
                right: 'today prev,next'
            },
            dayClick: $scope.alertEventOnClick,
            eventDrop: $scope.alertOnDrop,
            eventResize: $scope.alertOnResize
        }
    };

    $scope.events = [
        {
            title: 'OOSD',
            start: new Date("7 June 2016 1:00 PM"),
            end: new Date("7 June 2016 3:00 PM")
        },
        {
            title: 'Mobile',
            start: new Date("8 June 2016 1:00 PM"),
            end: new Date("8 June 2016 3:00 PM")
        },
        {
            title: 'OOSD',
            start: new Date("10 June 2016 3:00 PM"),
            end: new Date("10 June 2016 5:00 PM")
        },
        {
            title: 'Mobile',
            start: new Date("10 June 2016 1:00 PM"),
            end: new Date("10 June 2016 3:00 PM")
        },
        {
            title: 'OOSD',
            start: new Date("14 June 2016 1:00 PM"),
            end: new Date("14 June 2016 3:00 PM")
        },
        {
            title: 'Mobile',
            start: new Date("15 June 2016 1:00 PM"),
            end: new Date("15 June 2016 3:00 PM")
        },
        {
            title: 'OOSD Exam',
            start: new Date("17 June 2016 3:00 PM"),
            end: new Date("17 June 2016 5:00 PM")
        },
        {
            title: 'Mobile Exam',
            start: new Date("17 June 2016 1:00 PM"),
            end: new Date("17 June 2016 3:00 PM")
        }
    ];

    /* event source that pulls from google.com */
    $scope.googleEvents = {
            url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
            className: 'gcal-event',           // an option!
            currentTimezone: 'America/Chicago' // an option!
    };

    $scope.eventSources = [$scope.events, $scope.googleEvents];
}]);
