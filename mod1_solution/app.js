(function (){
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject=['$scope'];
  function LunchCheckController($scope){
    $scope.name='';
    $scope.count=0;
$scope.message="";

$scope.borderStyleRed={
    "border-color":"red"
}

$scope.borderStyleGreen={
    "border-color":"green"
}

$scope.itemCheck=function(){
  var textValue=$scope.name;
  var res=textValue.split(",");
  var len=res.length;


if (textValue == "") {
  $scope.message="Please enter data first";
  $scope.myTxtStyle={'color':'red'};
  $scope.borderStyle=$scope.borderStyleRed;
}

else if (len>0 && len<=3) {
    $scope.message="Enjoy!!";
    $scope.myTxtStyle={'color':'green'};
    $scope.borderStyle=$scope.borderStyleGreen;
}
else {
    $scope.message="Too Much!!";
    $scope.myTxtStyle={'color':'green'};
    $scope.borderStyle=$scope.borderStyleGreen;
}
};

  }

})();
