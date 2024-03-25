$(document).ready(function () {
    GetFlightDetail();

    function GetFlightDetail() {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('POST', 'OPTIONS');

        var apiUrl = 'https://localhost:5000/api/Flights/flightDetail';

        const requestData = {
            flightNumber: $('#flightNumber').val(),
        };
         
        $.ajax({
            url: apiUrl,
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json; charset=UTF-8',
            headers: headers,
            data: JSON.stringify(requestData),
            success: function (data, textStatus, xhr) {
                $('#depDate').html(data.departureDateTime);
                $('#arrDate').html(data.arrivalDateTime);
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log('Error in Operation');
            }
        });
    }
});