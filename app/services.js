angular.module('heliosApp.services', [])

.service('scrollServices', function(smoothScroll){
    return {
        scrollTop: function(){
          smoothScroll(document.getElementById('top'), {offset: 50});
        }
    };
})

.factory('SiteContent', function(){
    var slides = [
      {
        image: '/static/img/projects/Helios_projects_Liquid Urethane Membrane6.jpg',
        title: {
            en: 'Protect your home is our top priority',
            zhs: '我们以保护您的房屋为己任',
            zht: '我們以保護您的房屋為己任',
        },
        detail: {
            en: 'We are roofing contractor who is offer a total roofing, reroofing, waterproofing and repair service on all roof system. Our residential services protect you home, from Top down. ',
            zhs: '我们的住家屋顶装设、维护、防水服务，为您的居家提供自上而下的防护。',
            zht: '我們的住家屋頂裝設、維護、防水服務，為您的居家提供自上而下的防護。'
        }
      },
      {
        image: '/static/img/projects/Helios_projects_shigle1_7.jpg',
        title: {
            en: 'Great service is our Goal',
            zhs: '做到最好的服务水平',
            zht: '做到最好的服務水平'
        },
        detail: {
            en: 'When you work with our Expert Roofers, Helios committed to finding the best roofing solution for your needs.',
            zhs: 'Helios屋顶公司承诺会提供最适合您的解决方案',
            zht: 'Helios屋頂公司承諾會提供最適合您的解決方案'
        }
      },
      {
        image: '/static/img/projects/Helios_projects_BridgeportRoadRichmond1.jpg',
        title: {
            en: 'Commercial Roofing, In time and On time',
            zhs: '保质准时的商业屋顶工程',
            zht: '保質準時的商業屋頂工程'
        },
        detail: {
            en: 'Protecting your investment is what we concern. Our commercial roofing experts let you focus on your daily operation. Let us taking care of your "Top headache".',
            zhs: '我们的商业屋顶维修团队，助您一扫屋顶烦恼，轻松运筹商机',
            zht: '我們的商業屋頂維修團隊，助您一掃屋頂煩惱，輕鬆運籌商機'
        }
      },
    ];

    var serviceCategories = {
      commercial: {
        backgroundImg: 'url(http://www.wallpapersdesign.net/wp-content/uploads/2013/06/Usa-New-York-City-Buildings-Rockefeller-Center.jpg)', 
      },
      residential: {
        backgroundImg: 'url(http://upload.wikimedia.org/wikipedia/commons/5/5d/Colorful_row_of_houses.jpg)',
      }
    };

    var services = [
        {name: 'Service 01', detail: 'This is a great service text holder. Vid volutpat nisi placerat id felis velante sit amet justo. Namplacerat id felis vel a cursus mi. Sed placerat id felis vel semper. placerat id felis vel.'},
        {name: 'Service 02', detail: 'This is a great service text holder. Vid volutpat nisi placerat id felis velante sit amet justo. Namplacerat id felis vel a cursus mi. Sed placerat id felis vel semper. placerat id felis vel.'},
        {name: 'Service 03', detail: 'This is a great service text holder. Vid volutpat nisi placerat id felis velante sit amet justo. Namplacerat id felis vel a cursus mi. Sed placerat id felis vel semper. placerat id felis vel.'},
        {name: 'Service 04', detail: 'This is a great service text holder. Vid volutpat nisi placerat id felis velante sit amet justo. Namplacerat id felis vel a cursus mi. Sed placerat id felis vel semper. placerat id felis vel.'},
        {name: 'Service 05', detail: 'This is a great service text holder. Vid volutpat nisi placerat id felis velante sit amet justo. Namplacerat id felis vel a cursus mi. Sed placerat id felis vel semper. placerat id felis vel.'},
        {name: 'Service 06', detail: 'This is a great service text holder. Vid volutpat nisi placerat id felis velante sit amet justo. Namplacerat id felis vel a cursus mi. Sed placerat id felis vel semper. placerat id felis vel.'},
        {name: 'Service 07', detail: 'This is a great service text holder. Vid volutpat nisi placerat id felis velante sit amet justo. Namplacerat id felis vel a cursus mi. Sed placerat id felis vel semper. placerat id felis vel.'},
        {name: 'Service 08', detail: 'This is a great service text holder. Vid volutpat nisi placerat id felis velante sit amet justo. Namplacerat id felis vel a cursus mi. Sed placerat id felis vel semper. placerat id felis vel.'},
        {name: 'Service 09', detail: 'This is a great service text holder. Vid volutpat nisi placerat id felis velante sit amet justo. Namplacerat id felis vel a cursus mi. Sed placerat id felis vel semper. placerat id felis vel.'},
        {name: 'Service 10', detail: 'This is a great service text holder. Vid volutpat nisi placerat id felis velante sit amet justo. Namplacerat id felis vel a cursus mi. Sed placerat id felis vel semper. placerat id felis vel.'},
        {name: 'Service 11', detail: 'This is a great service text holder. Vid volutpat nisi placerat id felis velante sit amet justo. Namplacerat id felis vel a cursus mi. Sed placerat id felis vel semper. placerat id felis vel.'},
        {name: 'Service 12', detail: 'This is a great service text holder. Vid volutpat nisi placerat id felis velante sit amet justo. Namplacerat id felis vel a cursus mi. Sed placerat id felis vel semper. placerat id felis vel.'},
    
    ];

    var servicesMap = {
      touchOn: {
        name: 'Touch-On Roofing',
        detail: 'this is a great service of Touch-On Roofing...',
        icon: '/static/img/services/Torch-On_Roofing.png',
        img: '/static/img/services/Torch-On%20Roofing.jpg'

      },
      service2: {name: 'Service 2', detail: 'this is a great service 2...'},
    };

    var projectsMap = {
        'liquid': {
            'template': 'project.html',
            'title': 'Liquid Urethane Membrane',
            'info': 'This is a text placeholder. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue sed risus vitae efficitur. Sed dapibus dictum risus, nec pellentesque libero dignissim sed. Praesent blandit velit nulla, in tempus nisi ornare sed. Maecenas sagittis tortor in nibh tristique iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sit amet magna vitae nulla blandit commodo. Sed ornare hendrerit ultrices. Morbi bibendum massa a quam egestas tempus. Etiam aliquet neque et leo ornare pharetra. Cras odio orci, feugiat eu dapibus vitae, laoreet quis ante. Nulla convallis lorem ante, eu sodales erat dictum quis. Nullam vehicula scelerisque nulla ornare rhoncus. Nullam ultricies et neque sed iaculis.',
            'detail': 'This is a text placeholder. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue sed risus vitae efficitur. Sed dapibus dictum risus, nec pellentesque libero dignissim sed. Praesent blandit velit nulla, in tempus nisi ornare sed. Maecenas sagittis tortor in nibh tristique iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sit amet magna vitae nulla blandit commodo. Sed ornare hendrerit ultrices. Morbi bibendum massa a quam egestas tempus. Etiam aliquet neque et leo ornare pharetra. Cras odio orci, feugiat eu dapibus vitae, laoreet quis ante. Nulla convallis lorem ante, eu sodales erat dictum quis. Nullam vehicula scelerisque nulla ornare rhoncus. Nullam ultricies et neque sed iaculis.',
            'img0': '/static/img/projects/Helios_projects_Liquid Urethane Membrane5.jpg',
            'img1': '/static/img/projects/Helios_projects_Liquid Urethane Membrane4.jpg',
            'img2': '/static/img/projects/Helios_projects_Liquid Urethane Membrane3.jpg',
            'img3': '/static/img/projects/Helios_projects_Liquid Urethane Membrane1.jpg',
            'img4': '/static/img/projects/Helios_projects_Liquid Urethane Membrane7.jpg',
            'img5': '/static/img/projects/Helios_projects_Liquid Urethane Membrane2.jpg',
            'img6': '/static/img/projects/Helios_projects_Liquid Urethane Membrane6.jpg',
        },
        'shingle': {
            'template': 'project.html',
            'title': 'Shingle',
            'info': 'This is a text placeholder. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue sed risus vitae efficitur. Sed dapibus dictum risus, nec pellentesque libero dignissim sed. Praesent blandit velit nulla, in tempus nisi ornare sed. Maecenas sagittis tortor in nibh tristique iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sit amet magna vitae nulla blandit commodo. Sed ornare hendrerit ultrices. Morbi bibendum massa a quam egestas tempus. Etiam aliquet neque et leo ornare pharetra. Cras odio orci, feugiat eu dapibus vitae, laoreet quis ante. Nulla convallis lorem ante, eu sodales erat dictum quis. Nullam vehicula scelerisque nulla ornare rhoncus. Nullam ultricies et neque sed iaculis.',
            'detail': 'This is a text placeholder. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue sed risus vitae efficitur. Sed dapibus dictum risus, nec pellentesque libero dignissim sed. Praesent blandit velit nulla, in tempus nisi ornare sed. Maecenas sagittis tortor in nibh tristique iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sit amet magna vitae nulla blandit commodo. Sed ornare hendrerit ultrices. Morbi bibendum massa a quam egestas tempus. Etiam aliquet neque et leo ornare pharetra. Cras odio orci, feugiat eu dapibus vitae, laoreet quis ante. Nulla convallis lorem ante, eu sodales erat dictum quis. Nullam vehicula scelerisque nulla ornare rhoncus. Nullam ultricies et neque sed iaculis.',
            'img0': '/static/img/projects/Helios_projects_shigle1_7.jpg',
            'img1': '/static/img/projects/Helios_projects_shigle1_2.jpg',
            'img2': '/static/img/projects/Helios_projects_shigle1_3.jpg',
            'img3': '/static/img/projects/Helios_projects_shigle1_4.jpg',
            'img4': '/static/img/projects/Helios_projects_shigle1_1.jpg',
            'img5': '/static/img/projects/Helios_projects_shigle1_5.jpg',
            'img6': '/static/img/projects/Helios_projects_shigle1_6.jpg',
        },
        'insulation': {
            'template': 'project.html',
            'title': 'Insulation',
            'info': 'This is a text placeholder. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue sed risus vitae efficitur. Sed dapibus dictum risus, nec pellentesque libero dignissim sed. Praesent blandit velit nulla, in tempus nisi ornare sed. Maecenas sagittis tortor in nibh tristique iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sit amet magna vitae nulla blandit commodo. Sed ornare hendrerit ultrices. Morbi bibendum massa a quam egestas tempus. Etiam aliquet neque et leo ornare pharetra. Cras odio orci, feugiat eu dapibus vitae, laoreet quis ante. Nulla convallis lorem ante, eu sodales erat dictum quis. Nullam vehicula scelerisque nulla ornare rhoncus. Nullam ultricies et neque sed iaculis.',
            'detail': 'This is a text placeholder. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue sed risus vitae efficitur. Sed dapibus dictum risus, nec pellentesque libero dignissim sed. Praesent blandit velit nulla, in tempus nisi ornare sed. Maecenas sagittis tortor in nibh tristique iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sit amet magna vitae nulla blandit commodo. Sed ornare hendrerit ultrices. Morbi bibendum massa a quam egestas tempus. Etiam aliquet neque et leo ornare pharetra. Cras odio orci, feugiat eu dapibus vitae, laoreet quis ante. Nulla convallis lorem ante, eu sodales erat dictum quis. Nullam vehicula scelerisque nulla ornare rhoncus. Nullam ultricies et neque sed iaculis.',
            'img0': '/static/img/projects/Helios_projects_Insulation3.jpg',
            'img1': '/static/img/projects/Helios_projects_Insulation2.jpg',
            'img2': '/static/img/projects/Helios_projects_Insulation5.jpg',
            'img3': '/static/img/projects/Helios_projects_Insulation7.jpg',
            'img4': '/static/img/projects/Helios_projects_Insulation6.jpg',
            'img5': '/static/img/projects/Helios_projects_Insulation1.jpg',
            'img6': '/static/img/projects/Helios_projects_Insulation4.jpg',
        },
         'richmond': {
            'template': 'project.html',
            'title': 'Bridgeport Road',
            'info': 'This is a text placeholder. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue sed risus vitae efficitur. Sed dapibus dictum risus, nec pellentesque libero dignissim sed. Praesent blandit velit nulla, in tempus nisi ornare sed. Maecenas sagittis tortor in nibh tristique iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sit amet magna vitae nulla blandit commodo. Sed ornare hendrerit ultrices. Morbi bibendum massa a quam egestas tempus. Etiam aliquet neque et leo ornare pharetra. Cras odio orci, feugiat eu dapibus vitae, laoreet quis ante. Nulla convallis lorem ante, eu sodales erat dictum quis. Nullam vehicula scelerisque nulla ornare rhoncus. Nullam ultricies et neque sed iaculis.',
            'detail': 'This is a text placeholder. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'img0': '/static/img/projects/Helios_projects_BridgeportRoadRichmond2.jpg',
            'img1': '/static/img/projects/Helios_projects_BridgeportRoadRichmond4.jpg',
            'img2': '/static/img/projects/Helios_projects_BridgeportRoadRichmond5.jpg',
            'img3': '/static/img/projects/Helios_projects_BridgeportRoadRichmond6.jpg',
            'img4': '/static/img/projects/Helios_projects_BridgeportRoadRichmond3.jpg',
            'img5': '/static/img/projects/Helios_projects_BridgeportRoadRichmond7.jpg',
            'img6': '/static/img/projects/Helios_projects_BridgeportRoadRichmond1.jpg',
        },
    };
    return {
        slides: slides,
        services: services,
        serviceCategories: serviceCategories,
        serviceDetail: function(serviceId){return servicesMap[serviceId];},
        projectSummary: ['liquid', 'shingle', 'insulation', 'richmond'].map(function(projectId){
          var summary = projectsMap[projectId];
          summary.projectId = projectId;
          return summary;
        }),
        projectHighlight: ['liquid', 'shingle', 'insulation'].map(function(projectId){
          var summary = projectsMap[projectId];
          summary.projectId = projectId;
          return summary;
        }),
        projectDetail: function(projectId){return projectsMap[projectId];}
    };
})

.factory('MockService', ['$http', '$q',
  function($http, $q) {
    var me = {};

    me.getUserMessages = function(d) {
      /*
      var endpoint =
        'http://www.mocky.io/v2/547cf341501c337f0c9a63fd?callback=JSON_CALLBACK';
      return $http.jsonp(endpoint).then(function(response) {
        return response.data;
      }, function(err) {
        console.log('get user messages error, err: ' + JSON.stringify(
          err, null, 2));
      });
      */
      var deferred = $q.defer();
      
         setTimeout(function() {
        deferred.resolve(getMockMessages());
        }, 1500);
      
      return deferred.promise;
    };

    me.getMockMessage = function() {
      return {
        userId: '534b8e5aaa5e7afc1b23e69b',
        date: new Date(),
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      };
    }

    return me;
  }
])

// fitlers
.filter('nl2br', ['$filter',
  function($filter) {
    return function(data) {
      if (!data) return data;
      return data.replace(/\n\r?/g, '<br />');
    };
  }
])

// directives
.directive('autolinker', ['$timeout',
  function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        $timeout(function() {
          var eleHtml = element.html();

          if (eleHtml === '') {
            return false;
          }

          var text = Autolinker.link(eleHtml, {
            className: 'autolinker',
            newWindow: false
          });

          element.html(text);

          var autolinks = element[0].getElementsByClassName('autolinker');

          for (var i = 0; i < autolinks.length; i++) {
            angular.element(autolinks[i]).bind('click', function(e) {
              var href = e.target.href;
              console.log('autolinkClick, href: ' + href);

              if (href) {
                //window.open(href, '_system');
                window.open(href, '_blank');
              }

              e.preventDefault();
              return false;
            });
          }
        }, 0);
      }
    }
  }
])

function onProfilePicError(ele) {
  this.ele.src = ''; // set a fallback
}

function getMockMessages() {
  return {"messages":[{"_id":"535d625f898df4e80e2a125e","text":"Ionic has changed the game for hybrid app development.","userId":"534b8fb2aa5e7afc1b23e69c","date":"2014-04-27T20:02:39.082Z","read":true,"readDate":"2014-12-01T06:27:37.944Z"},{"_id":"535f13ffee3b2a68112b9fc0","text":"I like Ionic better than ice cream!","userId":"534b8e5aaa5e7afc1b23e69b","date":"2014-04-29T02:52:47.706Z","read":true,"readDate":"2014-12-01T06:27:37.944Z"},{"_id":"546a5843fd4c5d581efa263a","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","userId":"534b8fb2aa5e7afc1b23e69c","date":"2014-11-17T20:19:15.289Z","read":true,"readDate":"2014-12-01T06:27:38.328Z"},{"_id":"54764399ab43d1d4113abfd1","text":"Am I dreaming?","userId":"534b8e5aaa5e7afc1b23e69b","date":"2014-11-26T21:18:17.591Z","read":true,"readDate":"2014-12-01T06:27:38.337Z"},{"_id":"547643aeab43d1d4113abfd2","text":"Is this magic?","userId":"534b8fb2aa5e7afc1b23e69c","date":"2014-11-26T21:18:38.549Z","read":true,"readDate":"2014-12-01T06:27:38.338Z"},{"_id":"547815dbab43d1d4113abfef","text":"Gee wiz, this is something special.","userId":"534b8e5aaa5e7afc1b23e69b","date":"2014-11-28T06:27:40.001Z","read":true,"readDate":"2014-12-01T06:27:38.338Z"},{"_id":"54781c69ab43d1d4113abff0","text":"I think I like Ionic more than I like ice cream!","userId":"534b8fb2aa5e7afc1b23e69c","date":"2014-11-28T06:55:37.350Z","read":true,"readDate":"2014-12-01T06:27:38.338Z"},{"_id":"54781ca4ab43d1d4113abff1","text":"Yea, it's pretty sweet","userId":"534b8e5aaa5e7afc1b23e69b","date":"2014-11-28T06:56:36.472Z","read":true,"readDate":"2014-12-01T06:27:38.338Z"},{"_id":"5478df86ab43d1d4113abff4","text":"Wow, this is really something huh?","userId":"534b8fb2aa5e7afc1b23e69c","date":"2014-11-28T20:48:06.572Z","read":true,"readDate":"2014-12-01T06:27:38.339Z"},{"_id":"54781ca4ab43d1d4113abff1","text":"Create amazing apps - ionicframework.com","userId":"534b8e5aaa5e7afc1b23e69b","date":"2014-11-29T06:56:36.472Z","read":true,"readDate":"2014-12-01T06:27:38.338Z"}],"unread":0};
}

// configure moment relative time
moment.locale('en', {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "%d sec",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  }
});

