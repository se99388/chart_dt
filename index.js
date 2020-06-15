'use strict'
$(document).ready(function () {
    const url = 'https://1040699.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=227&deploy=1';
    const authorization = 'OAuth realm="1040699",oauth_consumer_key="6353ebecc9c799163580b7813d88b6aceeaf7ac5df2b1d38a4b3ebc49ecf9a97",oauth_token="8b1b030543065274160ab1e1e832ea0336dad36849b14ab434cb22b4e3dbec23",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1592226990",oauth_nonce="UgZlVMViqP0",oauth_version="1.0",oauth_signature="ZGTDZpzwNjrvaZoPezW4yypjMcA%3D"';
    $.ajax({
        nethod: 'GET',
        url:url,
        dataType: "jsonp",
        beforeSend: function(xhr, settings) { xhr.setRequestHeader('Authorization', authorization) },
        headers: {
            'Authorization': authorization,
            'Content-Type': 'application/json',
        },
        success: (response)=>{
            console.log(response)
        },
        error: function (error) {
            console.log('Error', error)
        }
    })

    // fetch(
    //     url, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': authorization,
    //             'Content-Type'  : 'application/json;charset=UTF-8'
    //         },
    //     })
    //     .then(response => response.json())
    //     .then(data => console.log(data));
});





