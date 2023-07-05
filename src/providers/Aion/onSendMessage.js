const aionProvider = (config) => async ({ message, conversation }, stream) => {
    console.log(conversation)
    // call the openai api
    const userId = config.userId;
    const tenant = config.tenant;

    const response = await fetch(`http://localhost:3003/features/conversationv2/${conversation.id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'tenant':tenant
        },
        body: JSON.stringify({
            "sender": {
                "id": userId,
                "language": "pt-BR"
            },
            "message": message.text,
            "messageType": "text",
            "botId": conversation?.bot?.id,
            "stream": true
        })
    });

    // create a reader to read the stream
    const reader = response.body.getReader();

    reader.read().then(function processText({ done, value }) {

        // value for fetch streams is a Uint8Array
        const delta = new TextDecoder("utf-8").decode(value);
        stream(delta)
        // if it's done, then stop reading
        if (done) {
            return;
        };

        // Read some more, and call this function again
        return reader.read().then(processText);
    });
    return;
}

export default aionProvider