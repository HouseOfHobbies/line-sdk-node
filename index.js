const lineRequest = require('./lib/line-request');

class lineSDK
{

    constructor(request, token)
    {
        this.httpClient = request;
        this.channelSecret = token;
        this.endpointBase = 'https://api.line.me';
    }

    getProgile(userId)
    {
        return this.httpClient.get(`${this.endpointBase}/v2/bot/profile/${encodeURIComponent(userId)}`);
    }

}

module.exports = lineSDK;
module.exports.request = lineRequest;

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
