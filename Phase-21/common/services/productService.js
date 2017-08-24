(function(){
    "use strict";
    //registering with common.services
    angular
        .module("commonService")
        .factory("productService", productService);

    function productService(){

        function calculateTax(Price, tax)
        {

            var hra =  (Price * tax)/100;
            hra = Math.round(hra);
            return hra;
        }
       function calculateTotal(Price, ShippingCharge){
            var othAll = (Price + ShippingCharge)
            othAll = Math.round(othAll);
            return othAll;
        }

        //can have multiple functions in single service.
        
        return {
            calculateTax: calculateTax,
            calculateTotal:calculateTotal
        };
    }
}());