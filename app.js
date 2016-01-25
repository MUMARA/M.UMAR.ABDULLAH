var app = angular.module("myApp", ["ngMaterial", "ngMdIcons"]);
app.controller("myController", function ($scope) {

    $scope.arr = [
        {incomingText: "First", check: false},
        {incomingText: "Second", check: false}
    ];

    $scope.add = function () {
        $scope.arr.push({incomingText: $scope.text, check: false});
        $scope.text = "";
    };

    $scope.del = function () {
        for (i = 0; i < $scope.arr.length; i++) {
            console.log("arr length" + $scope.arr.length);
            if ($scope.arr[i].check == true) {
                console.log("check items" + $scope.arr.check);
                $scope.arr.splice(i--, 1)
            }
        }
    }

    $scope.countTrue = function () {
        $scope.count = 0;
        for (i = 0; i < $scope.arr.length; i++) {
            if ($scope.arr[i].check == false) {
                $scope.count++;
            }
        }
    }
    $scope.countTrue();

});