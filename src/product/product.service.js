var product = angular.module('app.product');


product.service('Product', Product);

function Product() {
  var self = this;

  var products = [
    { name: "Iphone 4S", price: 5000 },
    { name: "Moto X Play", price: 1300 },
    { name: "Iphone 6", price: 100000 }
  ];

  self.getProducts = function() {
    return products;
  };

  self.add = function(product) {
    products.push(product);
  };

  self.edit = function(id, newProduct) {
    products[id] = newProduct;
  }

  self.get = function(id) {
    return products[id];
  }
} 