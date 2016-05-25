##Yo Angular GA Gamping Store Code Along

This is a simple Camping Store using AngularJS. It was created using the `gulp-angular` Yeoman generator. Technologies and features include:

* AngularJS 1.3.x
* Angular UI Router
* Angular Bootstrap
* Underscore
* Animation using ngAnimate and animate.css
* SASS
* Gulp and Bower


## Steps to Reproduce

### Step 1 - Create the project

1a. Install the `gulp-angular` generator

```bash
npm install -g generator-gulp-angular
npm install -g yo gulp bower
```

1b. Create a new directory and run the Yeoman gulp-angular generator

```bash
mkdir ga-camping-store
cd ga-camping-store
yo gulp-angular
```

When prompted, select all of the generator defaults except when asked "Would you like to use a REST resource library?" choose "None, $http is enough!"

> It will be approximately the 4th question!

```
? Which version of Angular do you want? 1.4.x (stable)
? What Angular modules would you like to have? (ngRoute and ngResource will be addressed after) angular-animate.js (enable animation features), angular-cookies.js (handle cookie management), angular-touch.js (for mobile development), angular-sanitize.js (to securely parse and manipulate HTML), angular-messages.js (enhanced support for displaying messages within templates), angular-aria.js (support for common ARIA attributes)
? Do you need jQuery or perhaps Zepto? jQuery 2.x (new version, lighter, IE9+)
? Would you like to use a REST resource library? None, $http is enough!
? Would you like to use a router? UI Router, flexible routing with nested views
? Which UI framework do you want? Bootstrap, the most popular HTML, CSS, and JS framework
? How do you want to implement your Bootstrap components? Angular UI Bootstrap, Bootstrap components written in pure AngularJS by the AngularUI Team
? Which CSS preprocessor do you want? Sass (Node), Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.
? Which JS preprocessor do you want? None, I like to code in standard JavaScript.
? Which HTML template engine would you want? None, I like to code in standard HTML.
.
.
.
It's time to use Gulp tasks:
- `$ gulp` to build an optimized version of your application in folder dist
- `$ gulp serve` to start BrowserSync server on your source files with live reload
- `$ gulp serve:dist` to start BrowserSync server on your optimized application without live reload
- `$ gulp test` to run your unit tests with Karma
- `$ gulp test:auto` to run your unit tests with Karma in watch mode
- `$ gulp protractor` to launch your e2e tests with Protractor
- `$ gulp protractor:dist` to launch your e2e tests with Protractor on the dist files
```

1c. Test it out

```bash
gulp serve
```

1d. Take a tour of the directory structure

See [Generator Gulp Angular Usage](https://github.com/Swiip/generator-gulp-angular/blob/master/docs/usage.md)

1e. Save your work:

```bash
git init
git add -A
git commit -m "Initial commit"
git tag step1
```

### Step 2 - Create an Item Service

2a. Create the file `src/app/item/item.service.js`:

```bash
mkdir src/app/item
touch src/app/item/item.service.js
```

2b. Add the following code to `src/app/item/item.service.js`:

```javascript
(function() {
  'use strict';

  angular
    .module('gaCampingStore')
    .service('ItemService', ItemService);

  /** @ngInject */
  function ItemService() {

    var that = this;

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
        imageFile: '1_person_tent.jpg'
      },
      {
        id: 2,
        category: 'Tents',
        name: '2-person Tent',
        price: 169.99,
        qty: 1,
        rating: 4.4,
        description: 'Just right for 2 people.',
        imageFile: '2_person_tent.jpg'
      },
      {
        id: 3,
        category: 'Tents',
        name: '3-person Tent',
        price: 249.99,
        qty: 1,
        rating: 3.5,
        description: '3 is a crowd!',
        imageFile: '3_person_tent.jpg'
      },
      {
        id: 4,
        category: 'Tents',
        name: '4-person Tent',
        price: 319.99,
        qty: 1,
        rating: 4.7,
        description: 'Fit for a family.',
        imageFile: '4_person_tent.jpg'
      },
      {
        id: 5,
        category: 'Flashlights',
        name: 'Small Flashlight',
        price:   6.99,
        qty: 1,
        rating: 4.0,
        description: 'A very small flashlight.',
        imageFile: 'small_flashlight.jpg'
      },
      {
        id: 6,
        category: 'Flashlights',
        name: 'Large Flashlight',
        price:  12.99,
        qty: 1,
        rating: 4.3,
        description: 'A big, powerful flashlight.',
        imageFile: 'large_flashlight.jpg'
      },
      {
        id: 7,
        category: 'Water Bottles',
        name: 'Small Water Bottle',
        price:   2.99,
        qty: 1,
        rating: 2.7,
        description: 'Holds 16 ounces.',
        imageFile: 'small_water_bottle.jpg'
      },
      {
        id: 8,
        category: 'Water Bottles',
        name: 'Large Water Bottle',
        price:   2.99,
        qty: 1,
        rating: 3.1,
        description: 'Holds 32 ounces.',
        imageFile: 'large_water_bottle.jpg'
      },
      {
        id: 9,
        category: 'Stoves',
        name: 'Small Stove',
        price:  29.99,
        qty: 1,
        rating: 3.5,
        description: 'Has 1 burner.',
        imageFile: 'small_stove.jpg'
      },
      {
        id: 10,
        category: 'Stoves',
        name: 'Large Stove',
        price:  39.99,
        qty: 1,
        rating: 4.7,
        description: 'Has 2 burners.',
        imageFile: 'large_stove.jpg'
      },
      {
        id: 11,
        category: 'Sleeping Bags',
        name: 'Simple Sleeping Bag',
        price:  49.99,
        qty: 1,
        rating: 4.4,
        description: 'A simple mummy bag.',
        imageFile: 'simple_sleeping_bag.jpg'
      },
      {
        id: 12,
        category: 'Sleeping Bags',
        name: 'Deluxe Sleeping Bag',
        price:  79.99,
        qty: 1,
        rating: 4.8,
        description: 'Will keep you warm in very cold weather!',
        imageFile: 'deluxe_sleeping_bag.png'
      }
    ];
  }
})();
```

2c. Use `bower` to add the `underscore` library to this project:

```bash
bower install --save underscore
```

2d. Add underscore as a global variable to the `.eslintrc` file:

```json
  "globals": {
    "angular": true,
    "module": true,
    "inject": true,
    "_": true
  }
```

2e. Save your work:

```bash
git add -A
git commit -m "Added Item Service"
git tag step2
```

### Step 3 - Add Some Routes

3a. Edit `src/app/index.route.js` and add the following routes:

```javascript
      .state('items', {
        url: '/items',
        templateUrl: 'app/item/index.html',
        controller: 'ItemIndexController',
        controllerAs: 'ctrl'
      })
      .state('itemDetail', {
        url: '/items/:itemId',
        templateUrl: 'app/item/show.html',
        controller: 'ItemShowController',
        controllerAs: 'ctrl'
      });
```

3b. Create the item Views and Controllers:

```bash
touch src/app/item/index.html
touch src/app/item/show.html
touch src/app/item/item.index.controller.js
touch src/app/item/item.show.controller.js
```

3c. Edit `src/app/item/index.html` and add the following:

```html
<div class="text-center">
  <h1>Item Index Page</h1>
  <div ng-repeat="item in ctrl.inventory">
    <a ng-click="ctrl.goItem(item)">{{ item.name + ' : ' + (item.price | currency) }}</a>
  </div>
</div>
```
> Why aren't we using an `ng-controller` directive here?

3d. Edit `src/app/item/show.html` and add the following:

```html
<section class="container-fluid item">
  <div class="row">
    <h2 class="text-center">{{ ctrl.item.name }}</h2>
    <div class="col-md-4 col-md-offset-2">
      <dl class="dl-horizontal">
        <dt>Category:</dt>
        <dd>{{ ctrl.item.category }}</dd>
        <dt>Price:</dt>
        <dd>{{ ctrl.item.price | currency }}</dd>
        <dt>Rating:</dt>
        <dd>{{ ctrl.item.rating }} / 5</dd>
        <dt>Description:</dt>
        <dd>{{ ctrl.item.description }}</dd>
      </dl>

      <div class="back">
        <button type="button"
                class="btn btn-primary"
                onclick="window.history.back()">Back</button>
      </div>
    </div>

    <div class="col-md-4 item-image">
      <img class="middle" width=200px src="/assets/images/inventory/{{ctrl.item.imageFile}}"/>
    </div>
  </div>
</section>
```

3e. Edit `src/app/item/item.index.controller.js` and add the following:

```javascript
(function() {
  'use strict';

  angular
    .module('gaCampingStore')
    .controller('ItemIndexController', ItemIndexController);

  /** @ngInject */
  function ItemIndexController(ItemService, $state) {
    var vm = this;

    vm.inventory = ItemService.inventory;

    vm.goItem = function (item) {
      $state.go( 'itemDetail', { itemId : item.id } );
    };
  }
})();
```

> Note how $state.go will navigate to a relative URL via the name of the state and the specified itemId.

3f. Edit `src/app/item/item.show.controller.js` and add the following:

```javascript
(function() {
  'use strict';

  angular
    .module('gaCampingStore')
    .controller('ItemShowController', ItemShowController);

  /** @ngInject */
  function ItemShowController(ItemService, $stateParams) {
    var vm = this;
    var id = $stateParams.itemId;
    vm.item = ItemService.findItemById(id);
  }
})();
```

> Note the use of $stateParams to grap the itemId from the relative URL.

3g. Test out the new views:

* [Item Index Page](http://localhost:3000/#/items)
* [Item Show Page](http://localhost:3000/#/items/3)

> Notice that the NavBar is not shown on these views. Why? How can we fix it?
> Also notice the strange hash marks in the URL. What are those and can we get rid of them?

3h. Save your work:

```bash
git add -A
git commit -m "Added some routes"
git tag step3
```

### Step 4 - Use html5Mode Relative URLs

Older browsers need to use the `#` sign for relative URLs. But with `html5mode` we don't need the `#` sign.

4a. Edit `src/app/index.route.js` and inject `$locationProvider` into the `routerConfig` function:

```javascript
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
```

Then add the following line at the bottom of that function:

```javascript
$locationProvider.html5Mode(true);
```

4b. Add a base URL to `src/index.html` in the `<head>` section:

```html
<head>
    <base href="/">
    .
    .
    .
```

4c. Save your work:

```bash
git add -A
git commit -m "Converted to html5Mode for relative URLs"
git tag step4
```

### Step 5 - Fix the NavBar and Relative Routes

5a. Move the NavBar from `src/app/main/main.html` to `src/index.html` just above the `<div ui-view></div>` line:

```html
  <div>
    <acme-navbar creation-date="main.creationDate"></acme-navbar>
  </div>

  <div ui-view></div>
```

Verify that the NavBar now shows up on all of the routes.

5b. Fix the links in the NavBar

Replace the `div class="collapse navbar-collapse"` in `src/app/components/navbar/navbar.html` with the following:

```html
<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6">
  <ul class="nav navbar-nav">
    <li ng-class="{ active: $state.includes('home') }"><a ui-sref="home">Home</a></li>
    <li ng-class="{ active: $state.includes('items') }"><a ui-sref="items" >Items</a></li>
  </ul>
</div>
```

In the above code we have:

* Used `ng-class` and `$state.includes` to set the `active` CSS class to the tab that is currently active.
* Replaced `ng-href` with `ui-sref` to specify the state (url/route) that we want to navigate to for each link.

5c. Save your work:

```bash
git add -A
git commit -m "Fixed the NavBar"
git tag step5
```



### Step 6 - Add some scss rules

Replace the code in `index.scss` between the two main comments section with the following:

```scss
.browsehappy {
  margin: 0.2em 0;
  background: #ccc;
  color: #000;
  padding: 0.2em 0;
}

.thumbnail {
  height: 200px;

  img.pull-right {
    width: 50px;
  }
}

/* Space out content a bit */
body {
  padding-top: 20px;
  padding-bottom: 20px;
}

/* Everything but the jumbotron gets side spacing for mobile first views */
.header,
.marketing,
.footer {
  padding-left: 15px;
  padding-right: 15px;
}

/* Custom page header */
.header {
  border-bottom: 1px solid #e5e5e5;

  /* Make the masthead heading the same height as the navigation */
  h3 {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 40px;
    padding-bottom: 19px;
  }
}

/* Custom page footer */
.footer {
  padding-top: 19px;
  color: #777;
  border-top: 1px solid #e5e5e5;
}

.container-narrow > hr {
  margin: 30px 0;
}

/* Main marketing message and sign up button */
.jumbotron {
  text-align: center;
  border-bottom: 1px solid #e5e5e5;

  .btn {
    font-size: 21px;
    padding: 14px 24px;
  }
}

/* Supporting marketing content */
.marketing {
  margin: 40px 0;

  p + h4 {
    margin-top: 28px;
  }
}

/* Responsive: Portrait tablets and up */
@media screen and (min-width: 768px) {
  .container {
    max-width: 1600px;
  }

  /* Remove the padding we set earlier */
  .header,
  .marketing,
  .footer {
    padding-left: 0;
    padding-right: 0;
  }
  /* Space out the masthead */
  .header {
    margin-bottom: 30px;
  }
  /* Remove the bottom border on the jumbotron for visual effect */
  .jumbotron {
    border-bottom: 0;
  }
}


.cart {
  padding: 10px;
}

.on-sale {
  color: red;
}

.qty {
  width: 60px;
}

$animation-duration: 0.25s;

.animate-inventory {
  &.ng-enter {
    animation: zoomInUp 0.5s;
  }
  &.ng-leave {
    animation: zoomOutDown 0.5s;
  }
}

.animate-cart {
  &.ng-enter {
    animation: fadeInRight 1s;
  }
  &.ng-leave {
    animation: fadeOutLeft 1s;
  }
}

/* =========================== */
/* Twitter Bootstrap Overrides */
/* =========================== */
.jumbotron {
  text-align: center;
  padding: 2px 0;
  margin-bottom: 0;
}

.list-group-item {
  border: none;
}

.dl-horizontal dt {
    text-align: left;
    /*margin-bottom: 1em;*/
    /*width: auto;*/
    padding-right: 1em;
}

.dl-horizontal dd {
    margin-left: 0;
    margin-bottom: 1em;
}
/* ================================== */
/* End of Twitter Bootstrap Overrides */
/* ================================== */

.items {
  padding-left: 0;
  padding-right: 30px;
}

.items p {
  font-size: 2.0rem;
  margin-left: 20px;
}

.items h3 {
  color: #337ab7;
}

.item {
  margin-top: 30px;
}

.item h2 {
  margin-bottom: 20px;
}

.item-image {
  margin-top: 0px;
  margin-left: 20px;
}

.item-image img {
}

.back {
  margin-top: 40px;
}

.search {
  text-align: center;
}
```

6b. Save your work:

```bash
git add -A
git commit -m "Added some SCSS"
git tag step6
```

### Step 7 - Add the Images and a Search Filter

7a. Run this in the `src/assets/images` folder to grab the camping store item images from GitHub. 

```bash
svn export https://github.com/drmikeh/ga_camping_store_angular/trunk/src/assets/images/inventory
```
7b. Let's add some more structure to our index page. Replace the contents of `app/item/index.html` with the following.

```html
<section class="container-fluid main">
  <div class="row">
    <article class="items col-sm-9">
      <section class="search">
        <form class="navbar-form" role="search">
          <div class="form-group"><input type="text" class="form-control" name="search" ng-model="ctrl.searchText" placeholder="Search"></div>
          <button type="clear"  class="btn btn-warning" ng-click="ctrl.searchText = ''">Reset</button>
        </form>
      </section>

      <div class="list-group">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 animate-inventory"
               ng-repeat="item in filteredItems = ( ctrl.inventory | inventory : ctrl.searchText | orderBy: ['category', 'price'] )">
            <a ng-click="ctrl.goItem(item)" class="list-group-item">
              <h3>{{ item.name }}</h3>
              <article class="row">
                <div class="col-xs-5">
                  <img class="middle" width=96px src="/assets/images/inventory/{{item.imageFile}}"/>
                </div>
                <div class="col-xs-7">
                  <dl class="dl-horizontal">
                    <dt>Category:</dt><dd>{{ item.category }}</dd>
                    <dt>Price:</dt><dd>{{ item.price | currency }}</dd>
                    <dt>Rating:</dt><dd>{{ item.rating }} / 5</dd>
                  </dl>
                </div>
              </article>
            </a>
            <div class="text-center">
              <button class="btn btn-sm btn-success" ng-click="ctrl.addItem(item)">Add to Cart</button>
            </div>
          </div>
          <div class="animate-inventory text-center" ng-hide="filteredItems.length">
            <h3>No items match your search.</h3>
          </div>
        </div>
      </div>
    </article>
  </div>
</section>
```

7c. Let's add a Search Filter to our `ItemIndexController` in `item/item.index.controller.js`. Let's add this below our controller module.

```javascript
angular.module('gaCampingStore')
	.filter('inventory', function() {

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
```

7d. Save your work:

```bash
git add -A
git commit -m "Added images"
git tag step7
```

### Step 8 - Add the Shopping Cart

8a. Create the file `src/app/cart/cart.service.js`:

```bash
mkdir src/app/cart
touch src/app/cart/cart.service.js
```

8b. Add the following code to `src/app/cart/cart.service.js`:

```javascript
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
    };

    vm.removeItem = function(item) {
      var index = vm.cart.indexOf(item);
      vm.cart.splice(index, 1);
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
```

8c. We need to inject `CartService` to our `ItemsIndexController`:

```javascript
angular
    .module('gaCampingStore')
    .controller('ItemIndexController', ItemIndexController);

  /** @ngInject */
  function ItemIndexController(ItemService, $state, CartService) {
    var vm = this;

    vm.searchText = '';
    vm.inventory = ItemService.inventory;
    vm.cart = CartService.cart;

    vm.addItem = function(item) {
      CartService.addItem(item);
    };

    vm.removeItem = function(item) {
      CartService.removeItem(item);
    };

    vm.getCost = function(item) {
      return CartService.getCost(item);
    };

    vm.getTotal = function() {
      return CartService.getTotal();
    };

    vm.clearCart = function() {
      return CartService.clearCart();
    };

    vm.goItem = function (item) {
      console.log('goItem: ' + item.id);
      $state.go( 'itemDetail', { itemId : item.id } );
    };
  };
```

8d. Add HTML for the Shopping Cart in `app/item/index.html`. Add the following code to the bottom of the page just inside the last `</div>`.

```html
<article class="col-sm-3">
  <h2>Your Cart:</h2>
  <ul>
    <li class="cart animate-cart" ng-repeat="item in ctrl.cart">
      <span>{{ item.qty + ' x ' + item.name + ': ' + (ctrl.getCost(item) | currency) }}</span>
      <button class="btn btn-danger btn-xs" ng-click="ctrl.removeItem(item)">Remove Item</button>
    </li>
  </ul>
  <h3>Total: {{ ctrl.getTotal() | currency }}</h3>
  <br>
  <button class="btn btn-danger" ng-click="ctrl.clearCart()">Clear Cart</button>
</article>
```

8e. Save your work:

```bash
git add -A
git commit -m "Added Shopping Cart"
git tag step8
```

###BONUS

1. Try adding `quantity` to your inventory items 
2. Try adding `ng-class` to a few HTML elements. Maybe an item div changes color once you’ve added it to the cart and changes a different color if it’s sold out.
3. Add the ability to remove one item at a time from the cart rather than an all or nothing removal.
4. Try adding a form to add new items to your inventory
