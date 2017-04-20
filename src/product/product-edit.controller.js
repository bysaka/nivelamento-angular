var product = angular.module('app.product');

product.controller('ProductEditController', ['$scope', '$stateParams', 'Product', ProductEditController]);

function ProductEditController($scope, $stateParams, Product) {
  var productId = $stateParams.id;
  $scope.product = Product.get(productId);

  $scope.onSubmit = function() {
    var productEdited = angular.copy($scope.product);
    Product.edit(productId, productEdited);
  };
}