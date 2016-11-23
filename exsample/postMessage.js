const line = require('../index');
const lineSDK = line.lineSDK;
const lineRequest = line.request;
const TextMessageBuilder = line.MessageBuilder.TextMessageBuilder;

require('dotenv').config();

let SDK = new lineSDK(
    new lineRequest(process.env.ACCESS_TOKEN),
    process.env.SECRET_TOKEN
);

SDK.pushMessage(
    process.env.USER_ID,
    new TextMessageBuilder(
        process.env.TEXT
    )
).then((res) => {console.log(res.body)}).catch((e) => {console.error(JSON.stringify(e,null,'\t'))});
