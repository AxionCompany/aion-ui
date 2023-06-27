/* @refresh reload */
import RenderAppInstance from './Main.jsx';
import * as Providers from './providers/sendMessage/index.js';

const renderApp = RenderAppInstance('root');

const bots = [
  {
    name: "Bot 1",
    description: "Descrição do bot 1",
    id: 1,
    introMessage: "Olá, eu sou o bot 1",
    suggestions: ['sugestão 1', 'sugestão 2', 'sugestão 3'],
    instructions: "You are a helpful assistant. Your name is Molly"
  },
  {
    name: "Bot 2",
    description: "Descrição do bot 2",
    id: 2
  }
];


const availableConfig = [
  {
    id: 'new_conversation',
    name: 'Nova Conversa',
  },
  {
    id: 'conversation_details',
    name: 'Dados da Conversa',
  },
  {
    id: 'delete_conversation',
    name: 'Apagar Conversa',
  },
];



const initialProps = {
  onSendMessage: Providers['OpenAIProvider']({
    model: "gpt-3.5-turbo",
    maxLength: 5000,
    apiKey: "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"
  }),
  onCreateConversation: () => { },
  onUpdateConversation: () => { },
  onDeleteConversation: () => { },
  allowConversations: true,
  placeholder: "Digite sua mensagem aqui...",
  regenerateLimitText: "Parece que não fui capaz de responder sua última mensagem de forma satisfatória. Por favor, tente reescrevê-la de forma diferente ou adicionar mais detalhes.",
  botTypingCaption: "Digitando...",
  availableConfig,
  bots: bots,
  conversations: []
}


renderApp(initialProps)