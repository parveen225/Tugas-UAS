var app = angular.module('ticketApp', []);

app.controller('TicketController', function ($scope, $location) {
    $scope.ticketTypes = [
        { label: 'Orang', value: 'orang' },
        { label: 'Mobil', value: 'mobil' },
        { label: 'Motor', value: 'motor' },
        { label: 'Sepeda', value: 'sepeda' },
        { label: 'Bus/Truk', value: 'bus' }
    ];

    $scope.formData = {};

    $scope.submitForm = function () {
        $location.path('/invoice.html').search($scope.formData);
    };
});

app.controller('InvoiceController', function ($scope, $location) {
    $scope.formData = $location.search();
});
