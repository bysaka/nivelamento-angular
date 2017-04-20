
var app = angular.module('app');

app.config(['$urlRouterProvider', configure]);

function configure($urlRouterProvider) {
  $urlRouterProvider.otherwise('/products/list');
}