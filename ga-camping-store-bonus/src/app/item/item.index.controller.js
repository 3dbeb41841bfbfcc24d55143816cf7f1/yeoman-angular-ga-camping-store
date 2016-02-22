(function() {
  'use strict';

angular.module('gaCampingStore')
  .controller('ItemIndexController', function($state, ItemService, CartService) {

    var vm = this;

    vm.searchText = '';
    vm.inventory = ItemService.inventory;
    vm.cart = CartService.cart;

    vm.addItem = function(item) {
      CartService.addItem(item);
      item.quantity -= 1;
      // if (item.quantity == 0){
      //   return document.getElementById('sold-out-button').text = "SOLD OUT"
      // }
    };

    vm.removeItem = function(item) {
      CartService.removeItem(item);
      ItemService.addOneToQuantity(item);
    };

    vm.getCost = function(item) {
      return CartService.getCost(item);
    };

    vm.getTotal = function() {
      return CartService.getTotal();
    };

    vm.clearCart = function() {
      CartService.clearCart();
      ItemService.resetQuantity();
    };

    vm.goItem = function (item) {
      console.log('goItem: ' + item.id);
      $state.go( 'itemDetail', { itemId : item.id } );
    };
  });

  angular.module('gaCampingStore').
  filter('inventory', function() {

    function isMatch(str, pattern) {
      return str.toLowerCase().indexOf(pattern.toLowerCase()) !== -1;
    }

    return function(inventory, searchText) {
      var items = {
          searchText: searchText,
          out: []
      };
      angular.forEach(inventory, function (item) {
        if (isMatch(item.category   , this.searchText) ||
            isMatch(item.name       , this.searchText) ||
            isMatch(item.description, this.searchText) ) {
          this.out.push(item);
        }
      }, items);
      return items.out;
    };
  });
})();