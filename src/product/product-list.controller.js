var product = angular.module('app.product');

product.controller('ProductListController', ['$scope', 'Product', ProductListController]);

function ProductListController($scope, Product) {
  $scope.products = Product.getProducts();
}