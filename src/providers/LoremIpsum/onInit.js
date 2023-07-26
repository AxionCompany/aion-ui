const aionProvider = (config) => async (setters) => {

    // simulate a delay
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('ok')
        },2000)
    });
}

export default aionProvider