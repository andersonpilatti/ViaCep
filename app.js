var app = angular.module('myApp', []);

app.controller('MainCtrl', ['ViaCEP', function(ViaCEP) {
    var self = this;

    
    self.Teste = function(){
        ViaCEP.Buscar(self.usr.cep).then(function(result){
            var data = result.data;

            self.usr.cep = data.cep;
            self.usr.logradouro = data.logradouro;
            self.usr.bairro = data.bairro;
            self.usr.localidade = data.localidade;
            self.usr.uf = data.uf;
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