/**
 *  Text Message Builder Class
 *  Private Method _Name
 *
 *  @author Goma::NanoHa
 *  @version 1.0
 */
const MessageType = require('../constant/message-type');

class TextMessageBuilder
{

    /**
     *  Constructor
     *
     *  @var text String
     *  @var extraTexts String(Variable Length)
     */
    constructor(text, ...extraTexts)
    {
        this.texts = [texts];
        this.message = [];
        this.texts = this.texts.concat(extraTexts);
    }

    /**
     *  buildMessage
     *
     *  @return Array Message
     */
    buildMessage()
    {

        if(this.message.length !== 0) {
            return this.message;
        }

        this.texts.forEach((text) => {
            this.message.push({
                'type': MessageType.TEXT,
                'text': text
            });
        });

        return this.message;

    }

}

module.exports = TextMessageBuilder;
