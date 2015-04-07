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
    }
  };
	return function(input, scope) {

		return input[scope.language] ||
            translation[input.toLowerCase()][scope.language] ||
            input.en ||
            input;
	};
});
