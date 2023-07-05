import  onSendMessage from "./onSendMessage";

export default function EchoProvider(config) {
    return {
        onSendMessage: onSendMessage(config)
    }
}