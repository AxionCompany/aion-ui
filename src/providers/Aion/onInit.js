const aionProvider = (config) => async (setters) => {
    const { userId, tenant } = config;

    const setBots = setters.setBots;
    const setConversations = setters.setConversations;

    // call the openai api
    const response = await fetch(`http://localhost:3003/features/playground/publicConversations?tenant=${tenant}&userId=${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    // get json response
    const json = await response.json();

    // set bots
    setBots(json.data.bots);
    const conversations = json?.data?.conversations?.map(conversation => {
        return {
            ...conversation,
            title: conversation.title || "Chat " + (json?.data?.bots?.find(bot => bot.id === conversation.bot).name || ''),
            description: conversation.description || conversation.messages[0]?.text,
            bot: json?.data?.bots?.find(bot => bot.id === conversation.bot)
        }
    })
    setConversations(conversations);

    return json;
}

export default aionProvider