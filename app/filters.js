angular.module('heliosApp.filters', [])

.filter('translate', function(){
  // translation table - Make Sure key is all in LOWER CASE
  var translation = {
    home: {
      zhs: '首页',
      zht: '首頁'
    },
    services: {
      zhs: '服务',
      zht: '服務項目'
    },
    contact: {
      zhs: '联系我们',
      zht: '聯繫我們'
    },
    projects: {
      zhs: '项目',
      zht: '工程項目'
    },
    'our services': {
      zhs: '我们的服务',
      zht: '服務項目'
    },
    commercial: {
      zhs: '商业',
      zht: '商業'
    },
    residential: {
      zhs: '民居',
      zht: '民居'
    }
  };
	return function(input, scope) {

		return input[scope.language] ||
            typeof(input) === 'string' && translation[input.toLowerCase()][scope.language] ||
            input.en ||
            input;
	};
});
