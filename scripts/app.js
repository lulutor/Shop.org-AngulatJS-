angular.module('ngClassifieds', ['ngMaterial'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('lime')
    .accentPalette('amber');
});
