angular.module('starterApp.controllers', ['starterApp.services'])

.controller('HeaderCtrl', function($scope){})
.controller('FooterCtrl', function($scope){})
.controller('HomeCtrl', function($scope, scrollServices){
    scrollServices.scrollTop();
})
.controller('ServicesCtrl', function($scope, scrollServices, SiteContent){
    $scope.services = SiteContent.services;
    scrollServices.scrollTop();
})
.controller('ProjectsCtrl', function($scope, scrollServices, SiteContent){
    $scope.projects = SiteContent.projects;
    scrollServices.scrollTop();
})

.controller('ProjectDetailCtrl', function($scope, $state, scrollServices, SiteContent){
    var projectId = $state.params.projectId | SiteContent.projects[0].projectId;
    $scope.project = SiteContent.projects[projectId];
    scrollServices.scrollTop();
})

.controller('ChatCtrl', function($scope){
    
})