var express = require('express');
var router = express.Router();
var request = require('request');



router.get('/start', function(req, res, next) {

    let from = req.query.from;
    
    var dataString = 'From='+from+'&CallerId=09243422233&Url=http://my.exotel.in/exoml/start/130933';

    var options = {
        url: 'https://afterall:f219d817314a3db67e8b786422c5af19acc44098@api.exotel.com/v1/Accounts/afterall/Calls/connect',
        method: 'POST',
        body: dataString
    };
    
    request.post(options,function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    });
    res.send('Request Placed...');
});

router.get('/text', function(req, res, next) {

    res.send('How was your overall experience. Please rate in between one and four');
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