var $ = jQuery.noConflict();
//var url_csv = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRQ9TKGRXDRqbxc16L00uA3A31QimdVG0CNXt1tQjzRSf6ezbftUacb1zauCmhEj4qvJIfIRBEO0rbu/pub?gid=1901807811&single=true&output=csv";
var url_csv = "https://visualizando.github.io/precioscovid/data/medicamentos.csv";        
var genApp = angular.module('genApp', ['app.routes', 'app.core' , 'app.services', 'app.auth', 'ngRoute']);
// genApp.constant('apiConstants',{ API_URL: 'https://1fxtrwjbb5.execute-api.us-east-1.amazonaws.com/dev/api' });
genApp.run(function($rootScope, $timeout, $location) {
  $rootScope.$on("$routeChangeStart", function(event, next, current) {
    // var url = $location.url();
    // new WOW().init();
    // gtag('event',url, {'event_category': 'load-page'});
  });
});


