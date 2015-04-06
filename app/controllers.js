angular.module('starterApp.controllers', ['starterApp.services'])

.controller('RootCtrl', function($scope, $modal, SiteContent){
    $scope.currentService = {
        name: 'rootService'
    };

    $scope.openServiceModal = function (serviceId) {

        var modalInstance = $modal.open({
          templateUrl: '/app/partials/service_detail.html',
          controller: 'ServiceModalInstanceCtrl',
          size: 'lg',
          resolve: {
            service: function () {
              return SiteContent.serviceDetail(serviceId);
            }
          }
        });
      };
})

.controller('ServiceModalInstanceCtrl', function ($scope, $modalInstance, service) {

  $scope.service = service;

/*
  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };
*/
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
})

.controller('HeaderCtrl', function($scope){})
.controller('FooterCtrl', function($scope){})
.controller('HomeCtrl', function($scope, scrollServices, SiteContent){
    scrollServices.scrollTop();
    $scope.slides = SiteContent.slides;
    $scope.projectHighlight = SiteContent.projectHighlight;
})
.controller('ServicesCtrl', function($scope, scrollServices, SiteContent){
    $scope.services = SiteContent.services;
    scrollServices.scrollTop();
})
.controller('ProjectsCtrl', function($scope, scrollServices, SiteContent){
    $scope.projectSummary = SiteContent.projectSummary;
    scrollServices.scrollTop();
    // TODO: to be deleted, just for Jasmine
    $scope.openServiceModal('touchOn');
})

.controller('ProjectDetailCtrl', function($scope, $state, scrollServices, SiteContent){
    var projectId = $state.params.projectId;
    $scope.project = SiteContent.projectDetail(projectId);
    scrollServices.scrollTop();
})

.controller('ChatCtrl', function($scope){
    
})