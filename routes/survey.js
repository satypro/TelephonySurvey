var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/start', function(req, res, next) {

    let from = req.query.from;
    
    var dataString = {
        From : '+91997127****', // Your mobile number
        CallerId :'08039510***', // Caller Id
        Url :'http://my.exotel.in/exoml/start/130933'
    };

    var options = {
        url: 'https://sid:yourkey@api.exotel.in/v1/Accounts/afterall/Calls/connect',
        method: 'POST',
        formData: dataString
    };
    
    request.post(options,function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
        else
        {
            console.log(error);
        }
    });
    res.send('Request Placed...');
});

router.get('/text', function(req, res, next) {

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('How was your overall experience. Please rate in between one and four');
});


router.get('/engine', function(req, res, next) {
  
    let callsid = req.query.CallSid;
    let digits = req.query.digits;

    console.log(callsid);
    console.log('digit response');
    console.log(digits);
    //now make the call to the Telephony Gateway  ex. exotel
    res.status(200).send();
    
});

module.exports = router;
