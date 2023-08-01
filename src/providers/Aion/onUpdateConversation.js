const aionProvider = (config) => async ({ conversation, data }) => {
    console.log("cheguei")
    const { accessToken, tenant } = config;

    if (!accessToken) return false;

    const response = await fetch(`${config.apiUrl}/resources/conversation/${conversation?.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + accessToken,
            "tenant": tenant
        },
        body: JSON.stringify(data)
    });

    return response.json();

}

export default aionProvider