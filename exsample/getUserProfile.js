const lineSDK = require('../index');
const lineRequest = require('../index').request;

let sdk = new lineSDK(
    new lineRequest(''),
    'test'
);


