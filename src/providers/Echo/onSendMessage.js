const echoProvider = (config) => async ({ message, conversation }, stream) => {

    // simulate stream response
    let i = 0;
    const delta = 1;
    // stream response
    if (config.stream) {
        const interval = setInterval(() => {
            let part = message.text.slice(i, i + delta)
            i++
            stream(part)
            if (i >= message.text.length) {
                clearInterval(interval)
            }
        }, 20);
    } else{
        return message.text
    }
    return;
}

export default echoProvider;