angular.module('heliosApp.filters', [])

.filter('translate', function(){
	return function(input, scope) {
		return input[scope.language] || input.en || input;
	}
})