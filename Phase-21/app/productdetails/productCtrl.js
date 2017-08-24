(function(){
    var app = angular.module("myApp");// using the getter method
    app.controller("productCtrl",["productResource",productCtrl]);// passing reference of function instead of writing
    
    function productCtrl(productResource){
        var vm=this;// use controller as syntax, vm is for view model
        productResource.query(function(data){
            vm.product = data;
        });
        
        vm.showImage=false;
        vm.toggleImage = function(){
            vm.showImage = !vm.showImage;
        }
        
    }
}());