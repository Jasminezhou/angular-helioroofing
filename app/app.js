angular.module('starterApp', ['ui.router', 'ui.bootstrap', 'smoothScroll', 'starterApp.controllers'])

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
                    controller: 'HeaderCtrl'
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
        })
    }
  ]
)

.directive('weatherBar', function($http){
    return {
        restrict: 'E',
        template: '<div id="weatherBar">' + 
                    '<table class="table table-bordered">' +
                      '<tbody>' +
                        '<tr id="dates"><th ng-repeat="date in dates">{{date[0]}}</br><span class="date">{{date[1]}}</span></th></tr>' +
                        '<tr id="weather"> <th ng-repeat="weather in weathers track by $index"><img src="{{weather}}"></th></tr>' +
                        '<tr id="services"> <td ng-repeat="service in services track by $index" colspan={{service[0]}} class="project_service {{service[1]}}">{{service[2]}}</td></tr>' +
                      '</tbody>' +
                    '</table>' +
                  '</div>',
        link: function (scope, element) {
            // Weather bar
          /*[{"data":
           *    {"pop": 55.00000000000001,
           *     "icon": "partly-cloudy-day",
           *     "summary": "Mostly cloudy throughout the day.",
           *     "temperatureMax": 18.78,
           *     "windSpeed": 4.3,
           *     "temperatureMin": 13.06,
           *     "services": ["roof_repair"]
           *    },
           *  "day":
           *    {
           *     "weekday": "Thursday",
           *     "date": "14-07-03"
           *    }
           * },
           * ...
           *]
           *
           * */
          scope.dates = [];
          scope.weathers = [];
          scope.services = [];
          var tr_services_temp = [];
          var short_weekdays = [ "SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];
          var formatted_month = function(d) { return (d.getMonth() < 9 ? '0' : '') + (d.getMonth() + 1); };
          var formatted_day = function(d) { return (d.getDate() < 10 ? '0' : '') + d.getDate(); };
          var service_duration = {
            "roof_repair": 3,
            "gutter_fix": 1,
            "inspection": 1,
            "default_service": 1
          };
          var service_name = {
            'roof_repair': "Repairing Roof",
            'gutter_fix': "Gutter Maintenance",
            'inspection': "Project Inspection",
            'default_service': "Repair and Maintenance"
          };

          $http.get( "http://jingweather.appspot.com/api/helios")
            .success(function(data) {
                data.forEach(function(w, i){
                    // tr_dates
                    var d = new Date(w.day.date);
                    scope.dates.push([short_weekdays[d.getDay()], formatted_month(d)+'/'+formatted_day(d)]);
                    // tr_weather
                    scope.weathers.push("/static/img/"+w.data.icon+".png");
                    // tr_services
                    tr_services_temp.push(w.data.services[0] || "default_service");
                });
            //tr_services
            var c = 0; //counter
            tr_services_temp.forEach(function(s,i){
                if (c === 0) {
                   scope.services.push([service_duration[s], s, service_name[s]]);
                   c = service_duration[s]-1;
                  } else {
                    --c;
                  }
                });

          });
        }
    }
})