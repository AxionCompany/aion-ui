import  onSendMessage from "./onSendMessage";

export default function LoremIpsumProvider(config) {
    return {
        onSendMessage: onSendMessage(config)
    }
}