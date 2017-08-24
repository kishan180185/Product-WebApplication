(function(){
    "use strictr";
    var app = angular.module("productResourceMock",["ngMockE2E"]);

    app.run(function($httpBackend){
        var product=[
            {       "proId": 1,
                    "Pcode":"E-1001",
                    "Name":"Mobile",
                    "MfgDate":"08/02/2017", 
                    "Price":800,
                    "tax":7.5,
                    "ShippingCharge":5,
                    "Image":"images/mobile.png"
                    },
                    {
                    "proId": 2,    
                    "Pcode":"E-1002",
                    "Name":"Tablet",
                    "MfgDate":"08/02/2017", 
                    "Price":1000,
                    "tax":7.5,
                    "ShippingCharge":5,
                    "Image":"images/tablet.png"
                    },
                    {
                    "proId": 3,   
                    "Pcode":"E-1003",
                    "Name":"Laptop",
                    "MfgDate":"08/02/2017", 
                    "Price":1900,
                    "tax":7.5,
                    "ShippingCharge":5,
                    "Image":"images/laptop.png"
                    },
                    {
                    "proId": 4,    
                    "Pcode":"E-1004",
                    "Name":"Music System",
                    "MfgDate":"08/02/2017", 
                    "Price":2000,
                    "tax":7.5,
                    "ShippingCharge":5,
                    "Image":"images/music.png"
                    },
                    {
                    "proId": 5,    
                    "Pcode":"E-1005",
                    "Name":"Television",
                    "MfgDate":"08/02/2017", 
                    "Price":1500,
                    "tax":7.5,
                    "ShippingCharge":5,
                    "Image":"images/tv2.png"
                    },
                    {
                    "proId": 6,    
                    "Pcode":"E-1006",
                    "Name":"Refrigerator",
                    "MfgDate":"08/02/2017", 
                    "Price":1600,
                    "tax":7.5,
                    "ShippingCharge":5,
                    "Image":"images/Rafrigerator.png"
                    },
                    {
                    "proId": 7,    
                    "Pcode":"E-1007",
                    "Name":"Microwave Oven",
                    "MfgDate":"08/02/2017", 
                    "Price":800,
                    "tax":7.5,
                    "ShippingCharge":5,
                    "Image":"images/microwave.png"
                    },
                    {
                    "proId": 8,   
                    "Pcode":"E-1008",
                    "Name":"Camera",
                    "MfgDate":"08/02/2017", 
                    "Price":1800,
                    "tax":7.5,
                    "Shipping Charge":5,
                    "Image":"images/Camera.png"
                    }
        ];
        
        var prodUrl = "/api/product";
        $httpBackend.whenGET(prodUrl).respond(product);

        var editingRegex = new RegExp(prodUrl+ "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function(
            method,url,data){

                var prod = {"proId":0};
                var parameters=url.split('/');
                var length = parameters.length;
                var id = parameters[length - 1];
                
                if(id>0)
                 {
                     for(var i=0; i < product.length; i++){
                         if(product[i].proId==id){
                             prod = product[i]
                             break;
                         }
                     };
                 } 
                  return [200, prod, {}];
                  
        
            });

            $httpBackend.whenPOST(prodUrl).respond(function(method,url,data){
                var prod = angular.fromJson(data);

                if(!prod.proId) {
                    prod.proId = product[product.length - 1].proId + 1;
                    product.push(prod);
                }
                else {
                    for(var i = 0; i < product.length; i++) {
                        if (product[i].proId == prod.proId) {
                            product[i] = prod;
                            break;
                        }
                    };
                }
                return [200, prod, {}];
            });

            $httpBackend.whenGET(/app/).passThrough();
    });

}());