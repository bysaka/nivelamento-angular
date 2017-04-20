var product = angular.module('app.product');

product.controller('ProductAddController', ['$scope', 'Product', ProductAddController]);

function ProductAddController($scope, Product) {
  $scope.onSubmit = function() {
    var newProduct = angular.copy($scope.product);
    Product.add(newProduct);
    alert('Producto adicionado com sucesso!');
    $scope.product = {};
  };
}