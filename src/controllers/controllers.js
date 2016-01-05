/**
 * Created by Pablo on 5/02/14.
 */

var agendaControllers = angular.module('agendaControllers', []);
agendaControllers.controller('pizarraCtrl', ['$scope', '$rootScope', 'getApp', 'playSoundService' , function ($scope, $rootScope, getApp, playSoundService) {

    var data = getApp.query(function () {
        $scope.datos = data.pizarra;
        $rootScope.size = {};
        // $rootScope.size.pizarra = _.size(data.pizarra);
        $rootScope.size.pizarra = "";

    });
    /*  Para que las teclas suenen           */
    $rootScope.play = function () {
        var audio = new Audio('./aud/TECLA.wav');
        audio.play();
        console.log('Tecla apretada');

    };
    /*$scope.foo = playSoundService;
     $scope.play = function(){
     $scope.foo.playSound();
     };


     $scope.orden = 'local';*/


}]);
agendaControllers.controller('dirGrlCtrl', ['$scope', 'getApp', '$rootScope', function ($scope, getApp, $rootScope) {
    var data = getApp.query(function () {
        $scope.datos = data.dirgeneral;
        $rootScope.size = {};
        $rootScope.size.dirgeneral = 1;
    });
    $scope.orden = 'local';
    /*$http.get('data/directorio.json').success(function (data) {

     $scope.datos = data.dirgeneral;
     $scope.orden = 'local';

     });*/

}]);
agendaControllers.controller('dirOrgCtrl', ['$scope', 'getApp', '$rootScope', function ($scope, getApp, $rootScope) {
    var data = getApp.query(function () {
        $scope.datos = data.dirorganizacion;
        $rootScope.size = {};
        $rootScope.size.dirorganizacion = 1;
    });
    $scope.orden = 'local';
}]);
agendaControllers.controller('dirEcoCtrl', ['$scope', 'getApp', '$rootScope', function ($scope, getApp, $rootScope) {
    var data = getApp.query(function () {
        $scope.datos = data.direconomia;
        $rootScope.size = {};
        $rootScope.size.direconomia = 1;
    });
    $scope.orden = 'local';
}]);
agendaControllers.controller('dirMedAmb', ['$scope', 'getApp', '$rootScope', function ($scope, getApp, $rootScope) {
    var data = getApp.query(function () {
        $scope.director = data.medioambiente[0];
        $scope.datos = _.rest(data.medioambiente);
        $rootScope.size = {};
        $rootScope.size.medioambiente = 1;
    });
    $scope.orden = 'local';
}]);

agendaControllers.controller('dirEnfInf', ['$scope', 'getApp', '$rootScope', function ($scope, getApp, $rootScope) {

    var data = getApp.query(function () {
        $scope.director = data.enfinfecciosas[0];
        $scope.datos = _.rest(data.enfinfecciosas);
        $rootScope.size = {};
        $rootScope.size.infecciosas = 1;


    });
    $scope.orden = 'local';
}]);
agendaControllers.controller('dirAsegLog', ['$scope', 'getApp', '$rootScope', function ($scope, getApp, $rootScope) {

    var data = getApp.query(function () {
        $scope.director = data.aseglogistica[0];
        $scope.datos = _.rest(data.aseglogistica);
        $rootScope.size = {};
        $rootScope.size.aseguramiento = 1;


    });
    $scope.orden = 'local';
}]);
agendaControllers.controller('dirSegPro', ['$scope', 'getApp', '$rootScope', function ($scope, getApp, $rootScope) {

    var data = getApp.query(function () {
        $scope.director = data.segproteccion[0];
        $scope.datos = _.rest(data.segproteccion);
        $rootScope.size = {};
        $rootScope.size.proteccion = 1;


    });
    $scope.orden = 'local';
}]);
agendaControllers.controller('depEquipos', ['$scope', 'getApp', '$rootScope', function ($scope, getApp, $rootScope) {

    var data = getApp.query(function () {
        $scope.director = data.depequipos[0];
        $scope.datos = _.rest(data.depequipos);
        $rootScope.size = {};
        $rootScope.size.equipos = 1;


    });
    $scope.orden = 'local';
}]);
agendaControllers.controller('dirAgrup1', ['$scope', 'getApp', '$rootScope', function ($scope, getApp, $rootScope) {

    var data = getApp.query(function () {
        $scope.director = data.diragrup1[0];
        $scope.datos = _.rest(data.diragrup1);
        $rootScope.size = {};
        $rootScope.size.agrup1 = 1;


    });
    $scope.orden = 'local';
}]);
agendaControllers.controller('dirAgrup2', ['$scope', 'getApp', '$rootScope', function ($scope, getApp, $rootScope) {

    var data = getApp.query(function () {
        $scope.director = data.diragrup2[0];
        $scope.datos = _.rest(data.diragrup2);
        $rootScope.size = {};
        $rootScope.size.agrup2 = 1;


    });
    $scope.orden = 'local';
}]);
agendaControllers.controller('dirAgrup3', ['$scope', 'getApp', '$rootScope', function ($scope, getApp, $rootScope) {

    var data = getApp.query(function () {
        $scope.director = data.diragrup3[0];
        $scope.datos = _.rest(data.diragrup3);
        $rootScope.size = {};
        $rootScope.size.agrup3 = 1;


    });
    $scope.orden = 'local';
}]);
agendaControllers.controller('dirAgrup4', ['$scope', 'getApp', '$rootScope', function ($scope, getApp, $rootScope) {

    var data = getApp.query(function () {
        $scope.director = data.diragrup4[0];
        $scope.datos = _.rest(data.diragrup4);
        $rootScope.size = {};
        $rootScope.size.agrup4 = 1;


    });
    $scope.orden = 'local';
}]);
agendaControllers.controller('clinicaOzonoCtrl', ['$scope', 'getApp', '$rootScope', function ($scope, getApp, $rootScope) {

    var data = getApp.query(function () {
        $scope.director = data.clinicaozono[0];
        $scope.datos = _.rest(data.clinicaozono);
        $rootScope.size = {};
        $rootScope.size.ozono = 1;


    });
    $scope.orden = 'local';
}]);
agendaControllers.controller('labDalmerCtrl', ['$scope', 'getApp', '$rootScope', function ($scope, getApp, $rootScope) {

    var data = getApp.query(function () {
        $scope.director = data.dalmer[0];
        $scope.datos = _.rest(data.dalmer);
        $rootScope.size = {};
        $rootScope.size.dalmer = 1;


    });
    $scope.orden = 'local';
}]);
agendaControllers.controller('CPNCtrl', ['$scope', 'getApp', '$rootScope', function ($scope, getApp, $rootScope) {

    var data = getApp.query(function () {
        $scope.director = data.cpn[0];
        $scope.datos = _.rest(data.cpn);
        $rootScope.size = {};
        $rootScope.size.cpn = 1;


    });
    $scope.orden = 'local';
}]);
agendaControllers.controller('otrosCtrl', ['$scope', 'getApp', '$rootScope', function ($scope, getApp, $rootScope) {

    var data = getApp.query(function () {

        $scope.datos = data.otros;
        $rootScope.size = {};
        $rootScope.size.otros = 1;

    });
    $scope.orden = 'local';
}]);

agendaControllers.controller('sonido', ['$rootScope', function ($rootScope) {

    $rootScope.play = function () {
        var audio = new Audio('./aud/TECLA.wav');
        audio.play();
        console.log('Tecla apretada');

    };
} ]);
agendaControllers.controller('modalCtrl', ['$scope', '$modal', '$log', function ($scope, $modal, $log) {

    $scope.open = function () {

        var modalInstance = $modal.open({
            backdrop: 'static',
            templateUrl: './src/views/modalhelp.html',
            controller: ModalInstanceCtrl,
            resolve: {}

        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
}]);
var ModalInstanceCtrl = function ($scope, $modalInstance) {

    $scope.ok = function () {
        $modalInstance.close();
    };
};
agendaControllers.controller('lastController', ['$scope', '$cookieStore', function ($scope, $cookieStore) {
    $scope.cookie = function () {
        var cook = $cookieStore.get('cookiePrueba');
        if (!cook) {
            $cookieStore.put('cookiePrueba', 1);

        }
        else {
            $cookieStore.put('cookiePrueba', cook + 1);
        }


        console.log('cookie' + cook);
    };
}]);
agendaControllers.controller('desabilita', ['$rootScope', '$timeout', function ($rootScope, $timeout) {
    $rootScope.isDisabled = true;
    $timeout(function () {
        $rootScope.isDisabled = false;
    }, 5000);


}]);
agendaControllers.controller('ctrlPadre', ['$scope', function ($scope) {
    $scope.modelo = { mensaje: 'hello computer'};
    $scope.padreAction = function () {

        $scope.modelo.mensaje = 'hello human desde padre';
    };

}]);
agendaControllers.controller('ctrlHijo', ['$scope', function ($scope) {

    $scope.hijoAction = function () {

        $scope.modelo.mensaje = 'hello human desde hijo';
    };
}]);
agendaControllers.controller('SomeController', ['$scope', function ($scope) {


}]);
agendaControllers.controller('MainController', ['$scope', function ($scope) {


}]);