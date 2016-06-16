var calendar = angular.module('calendar', ['ui.calendar', 'angularMoment']);

calendar.controller('calendarCtrl', ['$scope', function($scope) {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    // API key for Google calendar
    // If you need this, contact Paddy Moran
    const googleApiKey = '';


    $scope.alertOnDayClick = function(date,allDay,jsEvent, view) {
        alert('day');
    };

    $scope.eventClick = function(event) {
        alert('event');
    }

    /* alert on Resize */
    $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
        alert('Event Resized to make dayDelta ' + delta);
    };

    /* config object */
    $scope.uiConfig = {
        editable: true,
        calendar:{
            height: 600,
            editable: true,
            header:{
                left: 'today prev,next',
                center: 'title',
                right: 'month agendaWeek agendaDay'
            }
        },
        eventResize: $scope.alertOnResize,
        select: function() {
            alert('hi');
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
        url: 'j92l0avbj27103mm7n6o5fpe2g@group.calendar.google.com',
        className: 'gcal-event',
        googleCalendarApiKey: googleApiKey
    };

    /* Public holidays */
    $scope.publicHolidays =  {
        googleCalendarId: 'en.new_zealand#holiday@group.v.calendar.google.com',
        className: 'public-holiday',
        googleCalendarApiKey: googleApiKey
    }

    $scope.eventSources = [
        $scope.events,
        $scope.googleEvents,
        $scope.publicHolidays
    ];
}]);
