const lineRequest = require('./lib/line-request');
const MessageBuilder = require('./lib/messagebuilder/');
const TextMessageBuilder = MessageBuilder.TextMessageBuilder;

class lineSDK
{

    /**
     * lineSDK constructor.
     *
     * @param   lineRequest request
     * @param   Token String
     */
    constructor(request, token)
    {
        this.httpClient = request;
        this.channelSecret = token;
        this.endpointBase = 'https://api.line.me';
    }

    /**
     * Get Profile
     *
     * @param   String  userId
     * @return  Response
     */
    getProfile(userId)
    {
        return this.httpClient.get(`${this.endpointBase}/v2/bot/profile/${encodeURIComponent(userId)}`);
    }

    /**
     * Gets Message Content
     *
     * @param   String  messageId
     * @return  Response
     */
    getMessageContent(messageId)
    {
        return this.httpClient.get(`${this.endpointBase}/v2/bot/message/${encodeURIComponent(messageId)}/content`);
    }

    /**
     * Reply Message
     *
     * @param   String  replyToken
     * @param   MessageBuilder  messageBuilder
     * @return  Response
     */
    replyMessage(replyToken, messageBuilder)
    {
        return this.httpClient.post(`${this.endpointBase}/v2/bot/message/reply`, {
            replyToken: replyToken,
            messages: messageBuilder.buildMessage()
        });
    }

    replyText(replyToken, text, ...extraTexts)
    {
        return this.replyMessage(replyToken, new TextMessageBuilder(text, ...extraTexts));
    }

    pushMessage(to, messageBuilder)
    {
        return this.httpClient.post(`${this.endpointBase}/v2/bot/message/push`, {
            to: to,
            messages: messageBuilder.buildMessage()
        });
    }

    leaveGroup(groupId)
    {
        return this.httpClient.post(`${this.endpointBase}/v2/bot/group/${encodeURIComponent(groupId)}/leave`, []);
    }

    leaveRoom(groupId)
    {
        return this.httpClient.post(`${this.endpointBase}/v2/bot/room/${encodeURIComponent(groupId)}/leave`, []);
    }


}

module.exports = {
    lineSDK: lineSDK,
    request: lineRequest,
    MessageBuilder: MessageBuilder,
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
