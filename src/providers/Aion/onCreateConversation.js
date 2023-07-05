const aionProvider = (config) => async () => {

    const createObjectId = () => {
        let timestamp = (new Date().getTime() / 1000 | 0).toString(16);

        const objectId = timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
            return (Math.random() * 16 | 0).toString(16);
        }
        ).toLowerCase();

        return objectId;
    }
    return createObjectId();

}

export default aionProvider