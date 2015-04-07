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
    var services = [
        {name: 'Service 1', detail: 'this is a great service...'},
        {name: 'Service 2', detail: 'this is a great service...'},
        {name: 'Service 3', detail: 'this is a great service...'},
        {name: 'Service 4', detail: 'this is a great service...'},
        {name: 'Service 5', detail: 'this is a great service...'},
        {name: 'Service 6', detail: 'this is a great service...'},
        {name: 'Service 7', detail: 'this is a great service...'},
        {name: 'Service 8', detail: 'this is a great service...'},
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
});

