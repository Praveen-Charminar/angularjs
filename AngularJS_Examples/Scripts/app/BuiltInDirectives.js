(function () {
    var app = angular.module('directivemodule', []);
    var employees =[
        { name: 'John Peter', Location: 'Olympia Tech Park', Phone: 9876543210, isAwarded: true, status: true },
    { name: 'Rajesh Kumar', Location: 'Orion', Phone: 9879879870, isAwarded: true, status: true },
    { name: 'Nishant Misra', Location: 'RMZ', Phone: 9876543210, isAwarded: true, status: true }];

    app.controller("DirectiveController", function () {
        this.employees = employees;
    })

})();