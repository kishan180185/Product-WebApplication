(function(){
    "use strict";
     angular
         .module("myApp")
         .controller("DataAnalyticsController",["$scope","product",DataAnalyticsController]);
 
         function DataAnalyticsController($scope,product)
         {
 
             $scope.title="Data Analytics";
 
             var chartData=[];
 
             for(var i=0; i<product.length; i++)
             {
                 chartData.push({
                     x:product[i].Name,
                     y:[product[i].Price]
                 });
             }
 
             $scope.dataValues={
                 series:["Price","Tax","ShippingCharge"],
                 data:chartData
             };
 
 
             $scope.configValues={
                 title:"Data Analytics Title",
                 tooltips:true,
                 labels:false,
                 mouseover:function(){},
                 mouseout:function(){},
                 click:function(){},
                 legend:{
                     display:true,
                     position:'right'
                 }
             };
 
 
         }
 }());