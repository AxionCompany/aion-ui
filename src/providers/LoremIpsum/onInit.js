const aionProvider = (config) => async (setters) => {
    // simulate a delay
    return new Promise((resolve, reject) => {
        
        const setIsLoading = setters.setIsLoading;
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            resolve('ok')
        }, 2000)
    });


}

export default aionProvider