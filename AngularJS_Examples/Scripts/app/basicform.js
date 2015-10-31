(function () {
    var app = angular.module('formmodule', []);
    var employees = [
        {
            name: 'John Peter', Location: 'Olympia Tech Park', Phone: 9876543210, salary: 12000, DOJ: '12/02/2011',
            comments:[{rating:5,body:'Expert in .NET',author:'gokul@vz.com'},{rating:4,body:'Expert in WCF',author:'VJ@vz.com'}],
            profile: 'Software Engineer with 3+ yrs of experience in .net', skills: 'asp.net, mvc and WCF', image: './Images/John.png', isAwarded: true, status: true
        },
    {
        name: 'Rajesh Kumar', Location: 'Orion', Phone: 9879879870, salary: 9000, DOJ: '11/25/2010',
        comments: [{ rating: 5, body: 'Expert in Java', author: 'gokul@vz.com' }, { rating: 4, body: 'Expert in EJB', author: 'VJ@vz.com' }],
        profile: 'Senior Software Engineer with 6+ yrs of experience in Java', skills: 'EJB, Hibernate and Servlets', image: 'Images/Raj.jpg', isAwarded: true, status: true
    },
    {
        name: 'Nishant Misra', Location: 'RMZ', Phone: 9876543210, salary: 15000, DOJ: '10/10/2005',
        comments: [{ rating: 5, body: 'Expert in Routing', author: 'gokul@vz.com' }, { rating: 4, body: 'Expert in CISCO', author: 'VJ@vz.com' }],
        profile: 'Network Enginner with 3+ yrs of experience', skills: 'Routing', image: 'Images/Nishant.jpg', isAwarded: true, status: true
    }];

    app.controller("FilterController", function () {
        this.employees = employees;

    });

    app.controller("PanelController", function () {
        this.tab = 1;

        this.SelectedTab = function (setTab) { this.tab = setTab; };
        this.isSelectedTab = function (check) { return this.tab === check; };
    });

    app.controller("CommentController", function () {
        this.comment = {};

        this.addComment = function (employee) {
            employee.comments.push(this.comment);
            this.comment = {};
        };

    });

})();