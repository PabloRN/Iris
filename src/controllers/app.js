/**
 * Created by Pablo on 5/02/14.
 */
var agendaApp = angular.module('agendaApp', [ 'ngRoute', 'agendaControllers', 'agendaServices', 'agendaDirectives', 'ui.bootstrap', 'ngCookies']);
agendaApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'src/views/agenda.html',
            controller: 'pizarraCtrl'
        }).
        when('/pizarra', {
            templateUrl: 'src/views/agenda.html',
            controller: 'pizarraCtrl'
        }).
        when('/direccion-general', {
            templateUrl: 'src/views/agenda.html',
            controller: 'dirGrlCtrl'
        }).
        when('/direccion-organizacion', {
            templateUrl: 'src/views/agenda.html',
            controller: 'dirOrgCtrl'
        }).
        when('/direccion-economia', {
            templateUrl: 'src/views/agenda.html',
            controller: 'dirEcoCtrl'
        }).
        when('/direccion-medio-ambiente', {
            templateUrl: 'src/views/agenda.html',
            controller: 'dirMedAmb'
        }).
        when('/direccion-enfermedades-infecciosas', {
            templateUrl: 'src/views/agenda.html',
            controller: 'dirEnfInf'
        }).
        when('/direcion-aseguramiento-logistica', {
            templateUrl: 'src/views/agenda.html',
            controller: 'dirAsegLog'
        }).
        when('/direcion-seguridad-proteccion', {
            templateUrl: 'src/views/agenda.html',
            controller: 'dirSegPro'
        }).
        when('/departamento-equipos', {
            templateUrl: 'src/views/agenda.html',
            controller: 'depEquipos'
        }).
        when('/direccion-produccion-agrupacion1', {
            templateUrl: 'src/views/agenda.html',
            controller: 'dirAgrup1'
        })
        .when('/direccion-produccion-agrupacion2', {
            templateUrl: 'src/views/agenda.html',
            controller: 'dirAgrup2'
        })
        .when('/direccion-produccion-agrupacion3', {
            templateUrl: 'src/views/agenda.html',
            controller: 'dirAgrup3'
        }).
        when('/direccion-produccion-agrupacion4', {
            templateUrl: 'src/views/agenda.html',
            controller: 'dirAgrup4'
        }).
        when('/clinica-ozonoterapia', {
            templateUrl: 'src/views/agenda.html',
            controller: 'clinicaOzonoCtrl'
        }).
        when('/laboratorios-dalmer', {
            templateUrl: 'src/views/agenda.html',
            controller: 'labDalmerCtrl'
        }).
        when('/centro-productos-naturales', {
            templateUrl: 'src/views/agenda.html',
            controller: 'CPNCtrl'
        }).
        when('/otros-locales', {
            templateUrl: 'src/views/agenda.html',
            controller: 'otrosCtrl'
        }).

        otherwise({
            redirectTo: '/'
        });
}]);

/*var phonecatApp = angular.module('phonecatApp', [
 'ngRoute',
 'phonecatControllers'
 ]);

 phonecatApp.config(['$routeProvider',
 function($routeProvider) {
 $routeProvider.
 when('/phones', {
 templateUrl: 'partials/phone-list.html',
 controller: 'PhoneListCtrl'
 }).
 when('/phones/:phoneId', {
 templateUrl: 'partials/phone-detail.html',
 controller: 'PhoneDetailCtrl'
 }).
 otherwise({
 redirectTo: '/phones'
 });
 }]);

 */


/*var app = angular.module('myApp', ['ngGrid']);
 app.controller('MyCtrl', function($scope) {
 $scope.myData = [{name: "Moroni", age: 50},
 {name: "Tiancum", age: 43},
 {name: "Jacob", age: 27},
 {name: "Nephi", age: 29},
 {name: "Enos", age: 34}];
 $scope.gridOptions = { data: 'myData' };
 });*/
