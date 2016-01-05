/**
 * Created by Pablo on 6/03/14.
 */
var agendaServices = angular.module('agendaServices', ['ngResource']);
agendaServices.factory('getApp', ['$resource', function ($resource) {

    return $resource('./data/directorio.json', {}, {

        query: {method: 'GET', isArray: false}
    });
}]);
/*agendaServices.service('modalHelp', ['$modal', function ($modal) {
TODO


}]);*/
agendaServices.service('playSoundService', function () {
    this.playSound = function () {

        var audio = new Audio('./aud/TECLA.wav');
        audio.play();
        console.log('Tecla desde el service');

    }


});