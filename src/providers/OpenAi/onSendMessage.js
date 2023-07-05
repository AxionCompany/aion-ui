const openAiProvider = (config) => async ({ message, conversation }, stream) => {

    if (!config.apiKey) throw new Error('No OpenAI API key provided')

    // create a list of messages to send to the api
    let messages = [ // add bot initial instructions if they exist
        ...(conversation?.bot?.instructions
            ? [{
                role: 'system',
                content: conversation?.bot?.instructions
            }]
            : []
        ),
        ...conversation.messages.map(m => { // add all the messages from the conversation
            return {
                role: m.author === 'user' ? 'user' : 'assistant',
                content: m.text
            }
        })
    ];

    // limit the length of the messages to config.maxLength
    if (config.maxLength) {
        messages = concatenateMessages(messages, config.maxLength)
    }

    // call the openai api
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.apiKey}`
        },
        body: JSON.stringify({
            messages,
            model: config.model || "gpt-3.5-turbo",
            stream: config.stream || true
        })
    });

    // create a reader to read the stream
    const reader = response.body.getReader();

    reader.read().then(function processText({ done, value }) {

        // value for fetch streams is a Uint8Array
        const chunk = new TextDecoder("utf-8").decode(value);

        // split the chunk into lines
        chunk.split('\n').forEach(line => {
            if (line.startsWith('data:')) {
                let data;
                try {
                    // parse the json
                    data = JSON.parse(line.slice(5).trim())
                } catch (e) { '' }
                // get the delta from the json
                const delta = data?.choices?.[0]?.delta?.content;
                // if there's a delta, then stream it
                delta && stream(delta)
            }
        });

        // if it's done, then stop reading
        if (done) {
            return;
        };

        // Read some more, and call this function again
        return reader.read().then(processText);
    });
    return;
}

function concatenateMessages(messages, limit) {
    let concatenatedMessages = [];
    let concatenatedCharacters = 0;

    for (let i = messages.length - 1; i >= 0; i--) {
        const currentMessage = messages[i];

        if (concatenatedCharacters + currentMessage.content.length <= limit) {
            concatenatedMessages = [currentMessage, ...concatenatedMessages];
            concatenatedCharacters += currentMessage.content.length;
        } else {
            const remainingCharacters = limit - concatenatedCharacters;
            concatenatedMessages = [{...currentMessage, content:currentMessage.content.slice(-remainingCharacters)}, ...concatenatedMessages] ;
            concatenatedCharacters = limit;
            break;
        }
    }

    return concatenatedMessages;
}

export default openAiProvider