const aionProvider = (config) => async ({ conversation }) => {
    const { accessToken, tenant } = config;

    if (!accessToken) return false;

    const response = await fetch(`http://localhost:3003/resources/conversation/${conversation.id}`, {
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