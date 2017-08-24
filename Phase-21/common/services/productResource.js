(function(){
    "use strict";
    angular.module("commonService")
    .factory("productResource",["$resource", productResource]);

    function productResource($resource) {
        return $resource ("/api/product/:proId");
    }
}());