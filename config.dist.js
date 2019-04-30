'use strict';

var config = {};

/**
 * Login
 * @type {String}
 */
config.email = 'example@example.com';

/**
 * Password
 * @type {String}
 */
config.password = 'mysecretpassword';

/**
 * Auth endpoint
 * @type {String}
 */
config.oauth = 'https://api.example.com/api/v1/auth';

/**
 * Websocket URL
 * @type {String}
 */
config.websocket = 'wss://wss.example.com/WSGateway/';

module.exports = config;
