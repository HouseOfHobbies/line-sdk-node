const line = require('../index');
const lineSDK = line.lineSDK;
const lineRequest = line.request;

require('dotenv').config();

let SDK = new lineSDK(
    new lineRequest(process.env.ACCESS_TOKEN),
    process.env.SECRET_TOKEN
);

SDK.getProfile(process.env.USER_ID).then((res) => {console.log(res.body)}).catch((e) => {console.log(e)});
