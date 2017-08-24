(function(){
    
var app = angular.module("myApp");
app.controller("CarouselCtrl",["$scope",CarouselCtrl]);

// Controller  for Carousel
function CarouselCtrl($scope) {

// initializing the time Interval
  $scope.myInterval = 1500;
  
 // Initializing  slide array  
$scope.slides = [
  {image:'images/tv2.png', text:'TELEVISION'},
  {image:'images/mobile-tabs.png',text:'MOBILE-TABLET'},
  {image:'images/Camera.png',text:'CAMERA'},
  {image:'images/music.png',text:'MUSIC SYSTEM'},
  {image:'images/mobile.png',text:'MOBILE'},
  {image:'images/Rafrigerator.png',text:'REFRIGERATOR'},
  {image:'images/microwave.png',text:'MICROWAVE OVEN'},
  {image:'images/laptop.png',text:'LAPTOP'}
];
  
  var slides = $scope.slides;
  console.log(slides);

} 

}());