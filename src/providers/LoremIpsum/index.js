import  onSendMessage from "./onSendMessage";
import onInit from './onInit';

export default function LoremIpsumProvider(config) {
    return {
        onSendMessage: onSendMessage(config),
        onInit: onInit(config)
    }
}