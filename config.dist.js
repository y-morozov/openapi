'use strict';

var config = {};

/**
 * Логин
 * @type {String}
 */
config.email = 'example@example.com';

/**
 * Пароль
 * @type {String}
 */
config.password = 'mysecretpassword';

/**
 * Адрес точки авторизации
 * @type {String}
 */
config.oauth = 'https://api.example.com/api/v1/auth';

/**
 * Адрес вебсокет-сервиса
 * @type {String}
 */
config.websocket = 'wss://wss.example.com/WSGateway/';

module.exports = config;
