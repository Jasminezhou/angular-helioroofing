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
    'contact us': {
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
    },
    'project summary': {
      zhs: '精选项目',
      zht: '精選工程'
    },
    sun: {
      zhs: '周日',
      zht: '禮拜日'
    },
    mon: {
      zhs: '周一',
      zht: '禮拜一'
    },
    tue: {
      zhs: '周二',
      zht: '禮拜二'
    },
    wed: {
      zhs: '周三',
      zht: '禮拜三'
    },
    thr: {
      zhs: '周四',
      zht: '禮拜四'
    },
    fri: {
      zhs: '周五',
      zht: '禮拜五'
    },
    sat: {
      zhs: '周六',
      zht: '禮拜六'
    },
    address: {
      zhs: '地址',
      zht: '地址'
    },
    email: {
      zhs: '电子邮件',
      zht: '電子郵件'
    },
    fax: {
      zhs: '传真',
      zht: '傳真'
    },
    'office hours': {
      zhs: '办公时间',
      zht: '辦公時間'
    },
    'emergence service': {
      zhs: '紧急服务',
      zht: '緊急服務'
    },
    'free estimate': {
      zhs: '免费评估',
      zht: '免費評估'
    }
  };
	return function(input, scope) {

		return input[scope.language] ||
            typeof(input) === 'string' && translation[input.toLowerCase()][scope.language] ||
            input.en ||
            input;
	};
});
