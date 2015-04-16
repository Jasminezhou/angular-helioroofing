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
        summary: {
          en: 'We have strong experience in building and reparing commercial roofing system in Great Vancouver.',
          zhs: '我们在大温哥华地区有丰富的商业屋顶修建经验，建立了良好的口碑。',
          zht: '我們在大溫哥華地區有豐富的商業屋頂修建經驗，建立了良好的口碑。'
        },
        backgroundImg: 'url(http://www.wallpapersdesign.net/wp-content/uploads/2013/06/Usa-New-York-City-Buildings-Rockefeller-Center.jpg)', 
      },
      residential: {
        summary: {
          en: 'From apartment to single home, we have helped more than 100 families with better roofing system.',
          zhs: '从西温海岸到枫树岭，我们的足迹遍布大温，为超过100个家庭安装维修了放心、耐用、实惠的屋顶系统。用我们的专业和细心，换您每一天的安心和放心！',
          zht: '從西溫海岸到楓樹嶺，我們的足跡遍布大溫，為超過100個家庭安裝維修了放心、耐用、實惠的屋頂系統。用我們的專業和細心，換您每一天的安心和放心！'
        },
        backgroundImg: 'url(http://i1.wp.com/www.hfroofingcontractor.com/wp-content/uploads/2014/12/row-house.jpg)',
      }
    };

    var services = [
        {
          code: 'torchOn',
          icon: '/static/img/services/Torch-On_Roofing.png',
          name: {
            en: 'Torch-On Roofing',
            zhs: '烫胶屋顶',
            zht: '烫胶屋顶'
          }, 
          detail: {
            en: 'We help you to install and maintain this type of roof.',
            zhs: '一种塑胶底的防水屋顶。跟沥青片和瓦片不同的地方在于他的安装。这种屋顶是烧上去的，不是钉上去或卡上去的。如果屋顶是平顶的，这可能是最好的屋顶材质选项',
            zht: '一種塑膠底的防水屋頂。跟瀝青片和瓦片不同的地方在於他的安裝。這種屋頂是燒上去的，不是釘上去或卡上去的。如果屋頂是平頂的，這可能是最好的屋頂材質選項.'
          },
          category: ['commercial', 'residential'],
        },
        {
          code: 'singlePly',
          icon: '/static/img/services/Single-Ply_Roofing.png',
          name: {
            en: 'Single-Ply Roofing',
            zhs: '单层屋面',
            zht: '單層屋面'
          }, 
          detail: {
            en: 'Single ply roof systems provide strength, flexibility, and long-lasting durability. The inherent advantages of pre-fabricated sheets are the consistency of the quality of the products that are manufactured, the versatility in their attachment methods, and therefore, their broader applicability.',
            zhs: '单层屋顶是合成材料生产的柔性片材。提供坚固、灵活和持久的耐用性。',
            zht: '單層屋頂是合成材料生產的柔性片材，提供堅固，靈活和持久的耐用性。'
          },
          category: ['commercial'],
        },
        {
          code: 'inverted',
          icon: '/static/img/services/Inverted_Roofing.png',
          name: {
            en: 'Inverted Roofing',
            zhs: '倒置式屋面系统',
            zht: '倒置式屋面系统'
          }, 
          detail: {
            en: 'In this type of construction the principal thermal insulation material is applied on top of the weatherproof covering so that the complete roof construction including roof covering is kept at warm temperatures during the winter months and at moderate temperatures during the summer months.',
            zhs: '这种类型的屋顶将绝缘隔热层涂附在全天候防水屋顶的顶部，从而保证屋顶冬暖夏凉',
            zht: '这种类型的屋顶将绝缘隔热层涂附在全天候防水屋顶的顶部，从而保证屋顶冬暖夏凉'
          },
          category: ['commercial', 'residential'],
        },
        {
          code: 'green',
          icon: '/static/img/services/Skylight_Installation_and_Repair_for_Low_slope_Roofs.png',
          name: {
            en: 'Green Roof system',
          }, 
          detail: {
            en: 'We help you to install and maintain this type of roof.'
          },
          category: ['commercial', 'residential'],
        },
        {
          code: 'touchOnLowSlope',
          icon: '/static/img/services/Torch-on_Roofing_for_Low_slope_Roofs.png',
          name: {
            en: 'Torch-On Roofing for Low Slope Roofs',
          }, 
          detail: {
            en: 'We help you to install and maintain this type of roof.'
          },
          category: ['commercial', 'residential'],
        },
        {
          code: 'singlePlyLowSlope',
          icon: '/static/img/services/Single-Ply_Roofing_for_Low_slope_Roofs.png',
          name: {
            en: 'Single-Ply Roofing for Low Slope Roofs',
          }, 
          detail: {
            en: 'We help you to install and maintain this type of roof.'
          },
          category: ['commercial', 'residential'],
        },
        {
          code: 'ventilation',
          icon: '/static/img/services/Single-Ply_Roofing_for_Low_slope_Roofs.png',
          name: {
            en: 'Ventilation',
          }, 
          detail: {
            en: 'We help you to install and maintain this type of roof.'
          },
          category: ['commercial', 'residential'],
        },
        {
          code: 'skyline',
          icon: '/static/img/services/Skylight_Installation_and_Repairs.png',
          name: {
            en: 'Skyline Installation and Repair',
          }, 
          detail: {
            en: 'We help you to install and maintain this type of roof.'
          },
          category: ['commercial', 'residential'],
        },
        {
          code: 'insulation',
          icon: '/static/img/services/Insulation.png',
          name: {
            en: 'Insulation',
          }, 
          detail: {
            en: 'We help you to install and maintain this type of roof.'
          },
          category: ['commercial', 'residential'],
        },
        {
          code: 'flashing',
          icon: '/static/img/services/Flashing.png',
          name: {
            en: 'Flashing',
          }, 
          detail: {
            en: 'We help you to install and maintain this type of roof.'
          },
          category: ['commercial', 'residential'],
        },
        {
          code: 'gutters',
          icon: '/static/img/services/Build-in_Gutters.png',
          name: {
            en: 'Build-in Gutters',
          }, 
          detail: {
            en: 'We help you to install and maintain this type of roof.'
          },
          category: ['residential'],
        },
        {
          code: 'maintenance',
          icon: '/static/img/services/Repair_and_Maintenance.png',
          name: {
            en: 'General repair and maintenance',
          }, 
          detail: {
            en: 'We help you to install and maintain this type of roof.'
          },
          category: ['commercial', 'residential'],
        },
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
        services: function(category){
          return services.filter(function(s){
            return s.category.indexOf(category) >= 0;
          });
        },
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

