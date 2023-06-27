const EchoProvider = (config) => async ({ message, conversation }, stream) => {

    // simulate stream response
    let i = 0;
    const delta = 1;
    // stream response
    if (config.useStream) {
        const interval = setInterval(() => {
            let part = message.slice(i, i + delta)
            i++
            stream(part)
            if (i >= message.length) {
                clearInterval(interval)
            }
        }, 20);
    } else{
        return message
    }
    return;
}

export default EchoProvider;