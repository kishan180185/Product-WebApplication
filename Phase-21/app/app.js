(function() {
    "use strict";
    var app = angular.module("myApp", 
        ["commonService",
         "ui.router",
         "ui.mask",
        "ui.bootstrap",
        "angularCharts",
        "productResourceMock"]);

        app.config(function ($provide) {
            $provide.decorator("$exceptionHandler",
                ["$delegate",
                    function ($delegate) {
                        return function (exception, cause) {
                            exception.message = "User friendly message goes here!!! \n Message: " +
                            exception.message;
                            $delegate(exception, cause);
                            alert(exception.message);
                        };
                    }]);
        });
        
    app.config(["$stateProvider",
                "$urlRouterProvider",
                    function($stateProvider,$urlRouterProvider){
                        $urlRouterProvider.otherwise("/");

                        $stateProvider

                        .state("home",{
                            url:"/",
                            templateUrl:"app/mainView.html",
                            controller:"CarouselCtrl"
                        })

                        .state("prodList",{
                            url:"/productdetails",
                            templateUrl:"app/productdetails/productList.html",
                            controller:"productCtrl as vm"
                        })

                        .state("prodEdit",{
                            url:"/productdetails/edit/:proId",
                            templateUrl:"app/productdetails/productEdit.html",
                            controller:"productEditController as vm",
                            resolve:{
                                productResource : "productResource",
                                product : function(productResource, $stateParams) {

                                    var proId = $stateParams.proId;
                                    return productResource.get({proId: proId}).$promise;
                                }
                            }
                        })

                        .state("prodEdit.prodInfo",{
                            url:"/prodInfo",
                            templateUrl:"app/productdetails/productInfo.html"
                           
                        })

                        .state("prodEdit.prodPrice",{
                            url:"/prodPrice",
                            templateUrl:"app/productdetails/productPrice.html"
                            
                        })

                        .state("prodDetail",{
                            url:"/productdetails/:proId",
                            templateUrl:"app/productdetails/productDetailsView.html",
                            controller:"productDetailController as vm",
                            resolve:{
                                productResource :"productResource",
                                product: function(productResource,$stateParams) {

                                    var proId = $stateParams.proId;
                                    return productResource.get({proId: proId}).$promise;
                                }
                            }

                        })
                       
                        .state("priceAnalystics",{
                            url: "/dataAnalytics",
                            templateUrl:"app/pricedetails/dataAnalyticsView.html",
                            controller:"DataAnalyticsController",
                            resolve:{
                                productResource : "productResource",
                                product: function(productResource){

                                    return productResource.query(function(response){

                                    },
                                    function(response) {
                                        if (response.status == 404) {
                                            alert("Desired message for 404 error- " + 
                                            response.config.method + " " + response.config.url);

                                        } else {
                                            alert(response.statusText);
                                        }
                                    }).$promise;
                                }
                            }
                        })
                    }]
                );     
}());

