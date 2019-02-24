function ContactController(bastard, killa) {

	bastard.name = 'Bill Gates';

	killa(function () {
		bastard.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout']

angular
	.module('app')
	.controller('ContactController', ContactController);
