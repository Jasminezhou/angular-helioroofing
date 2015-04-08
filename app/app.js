angular.module('heliosApp', ['ui.router', 'ui.bootstrap', 'smoothScroll', 'ngStorage', 'ngSanitize', 'heliosApp.controllers', 'heliosApp.directives', 'heliosApp.filters'])

.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $state.transitionTo('root.home');
    }
  ]
)

.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {

      //////////////////////////
      // State Configurations //
      //////////////////////////

      // Use $stateProvider to configure your states.
      $stateProvider
      // Root state to master all
        .state('root', {
            abstract: true,
            views: {
                'header': {
                    templateUrl: 'app/partials/header.html',
                    controller: 'RootCtrl'
                },
                'main': {
                    template: '<div ui-view="master"></div>',
                    controller: 'RootCtrl'
                },
                'footer': {
                    templateUrl: 'app/partials/footer.html'
                },
                'chat': {
                    templateUrl: 'app/partials/chat.html',
                    controller: 'ChatCtrl'
                }
            }
        })

        // Home
        .state('root.home', {
            url: '/',
            views: {
                'master@root': {
                    templateUrl: 'app/partials/home.html',
                    controller: 'HomeCtrl'
                }
            }
        })
        // Services
        .state('root.services', {
            url: '/services',
            views: {
                'master@root': {
                    templateUrl: 'app/partials/services.html',
                    controller: 'ServicesCtrl'
                }
            }
        })
        // Projects
        .state('root.projects', {
            abstract: true,
        })
        .state('root.projects.summary', {
            url: '/projects',
            views: {
                'master@root': {
                    templateUrl: 'app/partials/projects.html',
                    controller: 'ProjectsCtrl'
                }
            }
        })
        // Project details
        .state('root.projects.detail', {
            url: '/projects/:projectId',
            views: {
                'master@root': {
                    templateUrl: 'app/partials/project_detail.html',
                    controller: 'ProjectDetailCtrl'
                }
            }
        });
    }
  ]
);

