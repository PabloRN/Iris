/**
 * Created by Pablo on 1/09/14.
 */
var agendaDirectives = angular.module('agendaDirectives', []);
agendaDirectives.directive('firstDirective', function () {

    return {
        restrict: 'EA',
        replace: 'true',
        scope: {
            myUrl: '=',
            myLinkText: '@'
        },
        template: '<a href="{{myUrl}}">{{myLinkText}} </a>'
    }
});
agendaDirectives.directive('myDirective', function () {

    return {
        restrict: 'EA',
        scope: {}

    };
});
agendaDirectives.directive('myInheritScopeDirective', function () {

    return {
        restrict: 'EA',
        scope: true


    };
});