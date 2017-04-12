var app = angular.module('myApp', []);

app.controller('MainCtrl', ['ViaCEP', function(ViaCEP) {
    var self = this;

    
    self.Teste = function(){
        ViaCEP.Buscar(self.usr.cep).then(function(result){
            var data = result.data;

            self.usr.logradouro = data.logradouro;
        });
    };
}]);

app.factory('ViaCEP', ['$http', function($http){
    return {
        Buscar : function (cep){
            return $http.get('https://viacep.com.br/ws/' + cep + '/json/');
        }
    }
}]);