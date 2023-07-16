import onInit from './onInit';
import onSendMessage from './onSendMessage';
import onCreateConversation from './onCreateConversation';
// import onUpdateConversation from './onUpdateConversation';
import onDeleteConversation from './onDeleteConversation';

export default function AionProvider(config) {
    config.apiUrl = config.apiUrl || 'https://homolog.ai-on.co/api';
    return {
        onInit: onInit(config),
        onSendMessage: onSendMessage(config),
        onCreateConversation: onCreateConversation(config),
        //onUpdateConversation: onUpdateConversation(config),
        onDeleteConversation: onDeleteConversation(config)
    }
};
