/* global Stripe */
angular
  .module('wabisabiApp', ['ui.router', 'ngResource', 'satellizer', 'ui.bootstrap', 'ngAnimate', 'ngMessages', 'ngCart'])
  .controller('cartCtrl', ['$scope', '$http', 'ngCart', function($scope, $http, ngCart) {
    ngCart.setTaxRate(7.5);
    ngCart.setShipping(2.99);
  }])
  .config(function() {
    Stripe.setPublishableKey('pk_test_ULwvAlGf5PSFbkLqX9gQN8sA');
    // Stripe.setApiVersion('2015-10-12');
  });
