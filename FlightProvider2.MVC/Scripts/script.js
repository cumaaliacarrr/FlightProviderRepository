function dynamicDropDown(listIndex) {

    document.getElementById("infants").length = 0;
    document.getElementById("children").length = 0;

    for (let i = 0; i < Number(listIndex) + 1; i++) {
        document.getElementById("infants").options[i] = new Option(i.toString(), i);
    }

    for (let i = 0; i < 9 - Number(listIndex) + 1; i++) {
        document.getElementById("children").options[i] = new Option(i.toString(), i);
    }
}
$(document).ready(function () {
    document.addEventListener('DOMContentLoaded', e => {
        $('#input-datalist').autocomplete()
    }, false);


    $('#btnSearchFlight').click(function (e) {
        e.preventDefault();
        
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('POST', 'OPTIONS');

        var apiUrl = 'https://localhost:5000/api/Flights/search';

        var depDate = $('#departure-date').val();
        var from = $('#input-datalist-from').val();
        var destination = $('#input-datalist-destination').val();
        var passengerCount = $('#adults').val();

        if (depDate == '' || from == '' || destination == '') {
            alert('Kalkış yeri, varış yeri ve gidiş tarihi alanı giriniz')
            return;
        }

        const request = {
            destination: destination,
            origin: from,
            departureDate: new Date(depDate.split("-")[2], depDate.split("-")[1], depDate.split("-")[0]),
        };

        $.ajax({
            url: apiUrl,
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json; charset=UTF-8',
            headers: headers,
            data: JSON.stringify(request),
            success: function (data, textStatus, xhr) {
                var list = '';
                $.each(data.flightOptions, function (index, value) {
                    list += FlightListPartial(value);
                });

                $('#flightList').html(list);
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log('Error in Operation');
            }
        });

    });

    function FlightListPartial(obj) {
        var html = $('#flightCardRow').html();
        html = html.replaceAll('{{FlightNumber}}', obj.flightNumber);
        html = html.replace('{{DepartureDate}}', DateFormat(obj.departureDateTime));
        html = html.replace('{{ArrivelDate}}', DateFormat(obj.arrivalDateTime));
        html = html.replace('{{Price}}', obj.price);
        html = html.replace('{{Cabin}}', $('#cabin').val());
        return html;
    }
    $('#directFlights').change(function () {
        if ($(this).is(':checked')) {
            $('#return-date').attr('disabled', 'disabled');
        }
    });

    function DateFormat(dateStr) {
        return dateStr.split('-')[0] + '-' + dateStr.split('-')[1] + '-' + dateStr.split('-')[2].substring(0, 2) + ' ' + dateStr.split('-')[2].substring(3, 5) + ':' + dateStr.split('-')[2].substring(6, 8) + ':' + dateStr.split('-')[2].substring(9, 11);
    }

});
$(document).on('click', '.selectFlight', function (e) {
    e.preventDefault();
    var flightNumber = $(this).attr('data-id');
    var from = $('#input-datalist-from').val();
    var destination = $('#input-datalist-destination').val();
    location.href = "Detail" + "?flightNumber=" + flightNumber + '&destination=' + destination + '&from=' + from;
});

