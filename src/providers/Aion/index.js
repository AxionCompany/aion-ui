import onInit from './onInit';
import onSendMessage from './onSendMessage';
import onCreateConversation from './onCreateConversation';
// import onUpdateConversation from './onUpdateConversation';
import onDeleteConversation from './onDeleteConversation';

// const apiUrl = 'https://aion-homolog.azurewebsites.net';
const apiUrl = 'http://localhost:3003';

export default function AionProvider(config) {
    config.apiUrl = apiUrl;
    return {
        onInit: onInit(config),
        onSendMessage: onSendMessage(config),
        onCreateConversation: onCreateConversation(config),
        //onUpdateConversation: onUpdateConversation(config),
        onDeleteConversation: onDeleteConversation(config)
    }
};
