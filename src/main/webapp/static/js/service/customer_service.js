'use strict';

angular.module('myApp').factory('CreditService', ['$http', '$q', function($http, $q){

    var REST_SERVICE_URI = '/creditscore';

    var factory = {
        creditScore: creditScore,
    };

    return factory;

    function creditScore(user, appurl) {
        var deferred = $q.defer();
        console.log('application url2: ' + appurl + REST_SERVICE_URI);
        $http.post(appurl + REST_SERVICE_URI, user)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while determine credit score');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

}]);
