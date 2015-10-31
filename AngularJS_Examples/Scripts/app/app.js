(function () {
    var app = angular.module('firstdemo', []);
    var cycles = [
        { name: 'MyBike', price: 5999, description: 'Basic model bike without gears', launchDate:'2010-05-24', soldOut: false, canSell: true},
        { name: 'MyBike-7S', price: 7999, description: 'MyBike with 7 speed gear', launchDate: '2012-10-01', soldOut: false, canSell: true },
    { name: 'ROCKRIDER 300 men', price: 9999, description: '21 speed bike which offers more luxury compared to a single speed bike', launchDate: '2015-02-15', soldOut: false, canSell: false }];

    app.controller("StoreController", function () {
        this.products = cycles;
    })

})();