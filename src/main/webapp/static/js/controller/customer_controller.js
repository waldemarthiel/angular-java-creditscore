'use strict';

angular.module('myApp').controller('CreditController', ['$scope', 'CreditService', '$location', function($scope, CreditService, $location) {
    var self = this;

    var appurl = location.protocol + '//' + location.host + location.pathname;

    self.user={id:null,firstname:'',lastname:'',dateofbirth:'',ssn:'', score:''};
    self.score='';

    self.submit = submit;
    self.reset = reset;

	console.log('application url: ' + appurl);


    function creditScore(user, appurl){
        CreditService.creditScore(user, appurl)
            .then(
            function(d) {
            	self.user.score = d.score;
            },
            function(errResponse){
                console.error('Error while getting credit score');
            }
        );
    }


    function submit() {
        console.log('Getting ', self.user);
        creditScore(self.user, appurl);
        //reset();
    }


    function reset(){
        self.user={id:null,firstname:'',lastname:'',dateofbirth:'',ssn:'', score:''};
        $scope.myForm.$setPristine(); //reset Form
    }

}])
.config(function ($locationProvider) {

    $locationProvider.html5Mode(true);

});
