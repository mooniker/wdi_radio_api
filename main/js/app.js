'use strict';

(function(){
  angular
    .module('radiolab', [
      'ui-router',
      'songs'
    ])
    .config([
      '$stateProvider',
      RouterFunction
    ])
})();

function RouterFunction($stateProvider) {
  $stateProvider
    .state('welcome', {
      url: '/welcome',
      templateUrl: 'js/welcome.html',
      controller: 'js/welcomeController.js',
      controllerAs: ''
    })
    .state('songsIndex', {
      url: '/songs',
      templateUrl: 'js/songs/index.html',
      controller: 'js/songs/controller.js',
      controllerAs: 'SongsCtrl'
    })
}
