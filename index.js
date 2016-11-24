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

    /**
     *  Reply Text
     *
     *  @param  String  replyToken
     *  @param  String  text
     *  @param  String  extraTexts(Variable Length)
     *  @return Response
     */
    replyText(replyToken, text, ...extraTexts)
    {
        return this.replyMessage(replyToken, new TextMessageBuilder(text, ...extraTexts));
    }

    /**
     *  Push Message
     *
     *  @param  String to
     *  @param  Messagebuilder  messageBuilder
     *  @return Response
     */
    pushMessage(to, messageBuilder)
    {
        return this.httpClient.post(`${this.endpointBase}/v2/bot/message/push`, {
            to: to,
            messages: messageBuilder.buildMessage()
        });
    }

    /**
     *  Leave Group
     *
     *  @param  String
     *  @return Response
     */
    leaveGroup(groupId)
    {
        return this.httpClient.post(`${this.endpointBase}/v2/bot/group/${encodeURIComponent(groupId)}/leave`, []);
    }

    /**
     *  Leave Room
     *
     *  @param  String
     *  @return Response
     */
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
