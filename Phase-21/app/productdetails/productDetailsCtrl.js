(function(){
    "use strict";

    angular
    .module("myApp")
    .controller("productDetailController", ["product", "productService", productDetailController]);
    function productDetailController(product, productService){
        
       var vm = this;
       vm.product = product;
         vm.title="Product Details " + vm.product.Name; 
         vm.taxAmount = productService.calculateTax(vm.product.Price, vm.product.tax);
         vm.totalAmount = vm.product.Price + vm.product.tax + vm.product.ShippingCharge;      
    }

}());