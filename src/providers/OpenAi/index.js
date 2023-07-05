import  onSendMessage from "./onSendMessage";

export default function OpenAiProvider(config) {
    return {
        onSendMessage: onSendMessage(config)
    }
}