const aionProvider = (config) => async (setters) => {

    let { userId, tenant, subdomain, accessToken, type } = config;

    type = type || 'public'  // can also be 'private-playground'
    const setBots = setters.setBots;
    const setConversations = setters.setConversations;

    const params = {}
    tenant && (params.tenant = tenant)
    subdomain && (params.subdomain = subdomain)
    userId && (params.userId = userId)

    const paramsStr = new URLSearchParams(params).toString();

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    if (accessToken) {
        options.headers['Authorization'] = `Bearer ${accessToken}`
    }

    const path = type === 'public' ? 'publicConversations' : 'privateConversations'

    // call the openai api
    const response = await fetch(
        `${config.apiUrl}/features/playground/${path}?${paramsStr}`,
        options
    );
    // get json response
    const json = await response.json();

    // set bots
    setBots(json.data.bots);

    const conversations = json?.data?.conversations?.map(conversation => {
        return {
            ...conversation,
            title: conversation.title || "Chat " + (json?.data?.bots?.find(bot => bot.id === conversation?.bot).name || ''),
            description: conversation.description || conversation?.messages[0]?.text,
            bot: json?.data?.bots?.find(bot => bot?.id === conversation?.bot)
        }
    })
    setConversations(conversations || []);


    return json;
}

export default aionProvider