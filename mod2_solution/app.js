(function(){
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
 var ctrl1=this;
 ctrl1.items=ShoppingListCheckOffService.getItems();

 ctrl1.boughtItem = function(itemIndex) {

   ShoppingListCheckOffService.removeItem(itemIndex);

 };

}

AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var ctrl2=this;

   ctrl2.items2=ShoppingListCheckOffService.addToList2();

}

function ShoppingListCheckOffService() {

 var service=this;

  var toBuyList = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name:"Chips",
      quantity:"10"
    }
  ];

  var boughtList=[];

  service.removeItem = function (itemIndex) {

service.addToList2(itemIndex);
   toBuyList.splice(itemIndex, 1);

 };

service.addToList2=function (itemIndex) {
  boughtList.push(toBuyList[itemIndex]);
  return boughtList;
}

  service.getItems = function () {
      return toBuyList;
    };
}

})();
