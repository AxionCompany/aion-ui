import  onSendMessage from "./onSendMessage";

export default function OpenAiProvider(config) {

    const getBurnerOpenAIKeys = async () => {
        const response = await fetch('https://aion-ui-burner-openai-keys.deno.dev');
        const data = await response.json();
        return data;
    }

    if (config.useBurnerOpenAIKeys === 'true') {
        config.dynamicKey = getBurnerOpenAIKeys();
    }


    return {
        onSendMessage: onSendMessage(config)
    }
}