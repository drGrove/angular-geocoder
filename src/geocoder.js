'use strict';
/**
 * AngularJS Geocoder module
 */
angular.module('geocoder', [])
angular.module('geocoder')
  .factory('Geocoder',
  [ '$http'
  , '$q'
  ,function($http, $q){
    var url = "//maps.googleapis.com/maps/api/geocode/json"
    var service = {}

    var serialize = function(obj) {
      var str = []
      for(var p in obj){
        if(obj.hasOwnProperty(p)){
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]))
        }
        return str.join('&')
      }
    }

    service.reverseLookup = function(options){
      var deferred = $q.defer()


      $http.get(url + "?" + serialize(options)).success(
        function(data){
          deferred.resolve(data);
        }
      )

      return deferred.promise
    }

    return service
  }])
