const WebSocket = require('ws');
const request = require('request');
const config = require('./config');

request.post({
    'url': config.oauth,
    'form': {
        'email': config.email,
        'password': config.password
    }
}, (error, response, body) => {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);

    let res = JSON.parse(body);
    let data = res.data;

    if (data.user_id && data.session_token && data.token) {
        let userId = data.user_id;
        let authToken = data.token;
        let sessionToken = data.session_token;

        let wss = new WebSocket(config.websocket + '?session_token=' + sessionToken, {
            rejectUnauthorized: false,
            headers: {
                'user-agent': '',
            }
        });

        wss.on('error', (e) => {
            console.log('socket error');
            console.log(e);
        });

        wss.on('message', (data, flags) => {
            console.log('Incoming message:');
            console.log(JSON.parse(data));
        });

        wss.on('open', (e) => {

            let auth = {
                "m": 0,
                "i": 0,
                "n": 'WebAuthenticateUser',
                "o": '{"SessionToken":"' +  authToken + '"}'
            };

            let uinfo = {
                "m": 0,
                "i": 0,
                "n": 'GetUserInfo',
                "o": '{"OMSId":1, "UserId":' +  userId + '}'
            };

            let inst = {
                "m": 0,
                "i": 0,
                "n": 'GetInstruments',
                "o": '{"OMSId":1}'
            };

            wss.send(JSON.stringify(auth));
            wss.send(JSON.stringify(inst));

        });

    } else {
        console.log('Connection error');
    }

});
