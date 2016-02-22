(function() {
  'use strict';

  angular.module('gaCampingStore')
  .service('CartService', function() {

    var vm = this;

    vm.cart = [];

    function findItemById(items, id) {
      return _.find(items, function(item) {
        return item.id === id;
      });
    }

    vm.addItem = function(item) {
          var found = findItemById(vm.cart, item.id);
          if (found) {
            found.qty += item.qty;
          }
          else {
            vm.cart.push(angular.copy(item));
          }
          console.log(vm.cart);
    };

    vm.removeItem = function(item) {
      var index = vm.cart.indexOf(item);
      if (vm.cart[index].qty == 1){
        vm.cart.splice(index, 1);
      } else {
        vm.cart[index].qty -= 1;
      }
    };

    vm.getCost = function(item) {
      return item.qty * item.price;
    };

    vm.getTotal = function() {
      return _.reduce(vm.cart, function(sum, item) {
        return sum + vm.getCost(item);
      }, 0);
    };

    vm.clearCart = function() {
      vm.cart.length = 0;
    };
  });
})();