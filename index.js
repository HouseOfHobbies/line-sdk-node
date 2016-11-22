const lineRequest = require('./lib/line-request');

class lineSDK
{

    constructor(request, token)
    {
        this.httpClient = request;
        this.channelSecret = token;
        this.endpointBase = 'https://api.line.me';
    }

    getProfile(userId)
    {
        return this.httpClient.get(`${this.endpointBase}/v2/bot/profile/${encodeURIComponent(userId)}`);
    }

    getMessageContent(messageId)
    {
        return this.httpClient.get(`${this.endpointBase}/v2/bot/message/${encodeURIComponent(messageId)}/content`);
    }

    replyMessage(replyToken, messageBuilder)
    {
        return this.httpClient.post(`${this.endpointBase}/v2/bot/message/reply`, {
            replyToken: replyToken,
            messages: messageBuilder.buildMessage()
        });
    }

}

module.exports = {
    lineSDK: lineSDK,
    request: lineRequest,
    MessageBuilder: require('./lib/messagebuilder/'),
    Constant: require('./lib/constant/')
}
/*
let sdk = new lineRequest();

let message = {
    to: '',
    messages: [
        {
            type: 'text',
            text: 'test'
        }
    ]
}
//sdk.post("https://api.line.me/v2/bot/message/push",JSON.stringify(message)).then((res) => {console.log(res.body)});
*/
