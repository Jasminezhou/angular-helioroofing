angular.module('heliosApp.controllers', ['heliosApp.services'])

.controller('RootCtrl', function($scope, $rootScope, $modal, $localStorage, SiteContent, scrollServices){
  // Site default settings
  $localStorage.$default({
    language: 'en',
  });
  // Language settings
    $scope.language = $localStorage.language;
    $scope.$watch('language', function(newVal, oldVal){
      if (newVal !== oldVal) {
        $localStorage.language = newVal;
        $rootScope.$broadcast('languageChanged', newVal);
      }
    });
    $rootScope.$on('languageChanged', function(event, data){
      $scope.language = data;
    });

    $scope.openServiceModal = function (serviceId) {

      var modalInstance = $modal.open({
        templateUrl: 'partials/service_detail.html',
        controller: 'ServiceModalInstanceCtrl',
        size: 'lg',
        resolve: {
          service: function () {
            return SiteContent.serviceDetail(serviceId);
          }
        }
      });
    };

    $rootScope.openEstimateModal = function () {

      var modalInstance = $modal.open({
        templateUrl: 'partials/estimate_detail.html',
        controller: 'EstimateModalInstanceCtrl',
        size: 'lg',
      });
    };

    $scope.scrollToTop = function(){
      scrollServices.scrollTop();
    }
})

.controller('ServiceModalInstanceCtrl', function ($scope, $rootScope, $localStorage, $modalInstance, service) {
  $scope.language = $localStorage.language;
  $scope.service = service;
/*
  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };
*/
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
  $rootScope.$on('languageChanged', function(event, data){
    $scope.language = data;
  });
})

.controller('EstimateModalInstanceCtrl', function ($scope, $rootScope, $localStorage, $modalInstance) {
  $scope.language = $localStorage.language;
  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  }
  $rootScope.$on('languageChanged', function(event, data){
    $scope.language = data;
  });
})

.controller('HeaderCtrl', function($scope){})
.controller('FooterCtrl', function($scope){})
.controller('HomeCtrl', function($scope, $rootScope, $localStorage, scrollServices, SiteContent){
    $scope.language = $localStorage.language;
    $scope.slides = SiteContent.slides;
    $scope.serviceHighlight = SiteContent.serviceHighlight;
    $scope.projectHighlight = SiteContent.projectHighlight;
    $rootScope.$on('languageChanged', function(event, data){
      $scope.language = data;
    });
    scrollServices.scrollTop();
})
.controller('ServicesCtrl', function($scope, $rootScope, $localStorage, $state, scrollServices, SiteContent){
  $scope.language = $localStorage.language;
  $scope.category = $state.params.category;
  if (!$scope.category || ['residential', 'commercial'].indexOf($scope.category) < 0) {
    $state.go('root.services', {category: 'commercial'});
  }
  $scope.categoryCfg = SiteContent.serviceCategories[$scope.category];
  $scope.services = SiteContent.services($scope.category);
  scrollServices.scrollTop();
  $rootScope.$on('languageChanged', function(event, data){
      $scope.language = data;
    });
})
.controller('ProjectsCtrl', function($scope, scrollServices, SiteContent){
    $scope.projectSummary = SiteContent.projectSummary;
    $scope.serviceDetail = SiteContent.serviceDetail;
    scrollServices.scrollTop();
    // TODO: to be deleted, just for Jasmine
    //$scope.openServiceModal('touchOn');
})

.controller('ProjectDetailCtrl', function($scope, $state, scrollServices, SiteContent){
    var projectId = $state.params.projectId;
    $scope.project = SiteContent.projectDetail(projectId);
    scrollServices.scrollTop();
})
