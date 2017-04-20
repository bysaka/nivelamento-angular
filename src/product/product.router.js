var product = angular.module('app.product');

product.config(['$stateProvider', configure]);

function configure($stateProvider) {

  $stateProvider
    .state('product-list', {
      url: '/products/list',
      controller: 'ProductListController',
      templateUrl: './src/product/product-list.html' 
    })
    .state('product-add', {
      url: '/products/add',
      controller: 'ProductAddController',
      templateUrl: './src/product/product-form.html'
    })
    .state('product-edit', {
      url: '/products/edit/:id',
      controller: 'ProductEditController',
      templateUrl: './src/product/product-form.html'
    })
}

