(function () {
    var app = angular.module('controllermodule', []);
    var employee =
        { name: 'John Peter', Location: 'Olympia Tech Park', Phone: 9876543210 };

    app.controller("BasicController", function () {
        this.employee = employee;
    })

})();