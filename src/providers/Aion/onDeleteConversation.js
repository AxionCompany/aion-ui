const aionProvider = (config) => async ({ conversation }) => {
    const { accessToken, tenant } = config;

    if (!accessToken) return false;

    const response = await fetch(`${config.apiUrl}/resources/conversation/${conversation.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + accessToken,
            "tenant": tenant
        },
    });

    return response.json();

}

export default aionProvider