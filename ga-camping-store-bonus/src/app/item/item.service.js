(function() {
  'use strict';

  angular
    .module('gaCampingStore')
    .service('ItemService', ItemService);

  /** @ngInject */
  function ItemService() {

    var that = this;

    that.resetQuantity = function(){
      _.each(that.inventory, function(item){
        item.quantity = 3;
      });
    }

    that.addOneToQuantity = function(item){
      var item = that.findItemById(item.id);
      item.quantity += 1;
      console.log(item);
    }

    that.findItemById = function(id) {
      var itemId = parseInt(id);
      return _.find(that.inventory, function(item) {
        return item.id === parseInt(itemId);
      });
    };

    // TODO: eventually we want to fetch the inventory from the server.
    that.inventory = [
      {
        id: 1,
        category: 'Tents',
        name: '1-person Tent',
        price: 119.99,
        qty: 1,
        rating: 3.8,
        description: 'A very small tent.',
        imageFile: '1_person_tent.jpg',
        quantity: 3
      },
      {
        id: 2,
        category: 'Tents',
        name: '2-person Tent',
        price: 169.99,
        qty: 1,
        rating: 4.4,
        description: 'Just right for 2 people.',
        imageFile: '2_person_tent.jpg',
        quantity: 3
      },
      {
        id: 3,
        category: 'Tents',
        name: '3-person Tent',
        price: 249.99,
        qty: 1,
        rating: 3.5,
        description: '3 is a crowd!',
        imageFile: '3_person_tent.jpg',
        quantity: 3
      },
      {
        id: 4,
        category: 'Tents',
        name: '4-person Tent',
        price: 319.99,
        qty: 1,
        rating: 4.7,
        description: 'Fit for a family.',
        imageFile: '4_person_tent.jpg',
        quantity: 3
      },
      {
        id: 5,
        category: 'Flashlights',
        name: 'Small Flashlight',
        price:   6.99,
        qty: 1,
        rating: 4.0,
        description: 'A very small flashlight.',
        imageFile: 'small_flashlight.jpg',
        quantity: 3
      },
      {
        id: 6,
        category: 'Flashlights',
        name: 'Large Flashlight',
        price:  12.99,
        qty: 1,
        rating: 4.3,
        description: 'A big, powerful flashlight.',
        imageFile: 'large_flashlight.jpg',
        quantity: 3
      },
      {
        id: 7,
        category: 'Water Bottles',
        name: 'Small Water Bottle',
        price:   2.99,
        qty: 1,
        rating: 2.7,
        description: 'Holds 16 ounces.',
        imageFile: 'small_water_bottle.jpg',
        quantity: 3
      },
      {
        id: 8,
        category: 'Water Bottles',
        name: 'Large Water Bottle',
        price:   2.99,
        qty: 1,
        rating: 3.1,
        description: 'Holds 32 ounces.',
        imageFile: 'large_water_bottle.jpg',
        quantity: 3
      },
      {
        id: 9,
        category: 'Stoves',
        name: 'Small Stove',
        price:  29.99,
        qty: 1,
        rating: 3.5,
        description: 'Has 1 burner.',
        imageFile: 'small_stove.jpg',
        quantity: 3
      },
      {
        id: 10,
        category: 'Stoves',
        name: 'Large Stove',
        price:  39.99,
        qty: 1,
        rating: 4.7,
        description: 'Has 2 burners.',
        imageFile: 'large_stove.jpg',
        quantity: 3
      },
      {
        id: 11,
        category: 'Sleeping Bags',
        name: 'Simple Sleeping Bag',
        price:  49.99,
        qty: 1,
        rating: 4.4,
        description: 'A simple mummy bag.',
        imageFile: 'simple_sleeping_bag.jpg',
        quantity: 3
      },
      {
        id: 12,
        category: 'Sleeping Bags',
        name: 'Deluxe Sleeping Bag',
        price:  79.99,
        qty: 1,
        rating: 4.8,
        description: 'Will keep you warm in very cold weather!',
        imageFile: 'deluxe_sleeping_bag.png',
        quantity: 3
      }
    ];
  }
})();
