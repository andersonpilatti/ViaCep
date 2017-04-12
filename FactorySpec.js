describe('Test ViaCEP', function() {
  beforeEach(module('myApp'));

  var self = this;
  var ctrl, svcViaCEP;

  beforeEach(inject(function($controller, ViaCEP) {
    ctrl = $controller('MainCtrl');
    svcViaCEP = ViaCEP;
  }));

  self.result = '';

  it('Verifica consulta CEP', function() {
     svcViaCEP.Buscar('82630380').then(function(d){
         expect(1).toEqual('Curitiba'); 
     });

       
  });
});
