const LoremIpsumProvider = (config) => async ({ message, conversation }, stream) => {
    const response = '## Title. \n - lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n - lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
    // simulate stream response
    let i = 0;
    const delta = 1;
    // stream response
    if (config.useStream) {
        const interval = setInterval(() => {
            let part = response.slice(i, i + delta)
            i++
            stream(part)
            if (i >= response.length) {
                clearInterval(interval)
            }
        }, 20);
    } else {
        // return initial response
        return response
    }
    return
}

export default LoremIpsumProvider;