/* @refresh reload */
import RenderAppInstance from './Main.jsx';
import * as Providers from './providers/sendMessage/index.js';

const renderApp = RenderAppInstance;

const bots = [
  {
    name: "Bot 1",
    description: "Descrição do bot 1",
    id: 1,
    introMessage: "Olá, eu sou o bot 1",
    suggestions: ['sugestão 1', 'sugestão 2', 'sugestão 3'],
    instructions: "You are a helpful assistant. Your name is Molly"
  }
];

const text1 = "#title\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam lacinia, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget aliquam lacinia, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl.";
const text2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod. ![imagem-teste](https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.webp)"

const messages = [
    { "author": "chatbot", "text": text1 },
    { "author": "user", "text": text2 },
    { "author": "chatbot", "text": text2 },
    { "author": "user", "text": text2 },
    { "author": "chatbot", "text": text1 },
    { "author": "user", "text": text1 },
    { "author": "chatbot", "text": text2 },
    { "author": "user", "text": text2 },
    { "author": "chatbot", "text": text1 },
    { "author": "user", "text": text2 },
    { "author": "chatbot", "text": text1 },
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
  conversations: [
    // {
    //   title: "Conversa 1",
    //   description: "Descrição da conversa 1",
    //   id: 1,
    //   messages: messages,
    //   bot: bots[0],
    //   updatedAt: new Date("2023-06-20")
    // },
    // {
    //   title: "Conversa 2",
    //   description: "Descrição longa da conversa 2, adicionando mais contexto e informações",
    //   id: 2,
    //   messages: messages,
    //   bot: bots[1],
    //   updatedAt: new Date("2023-06-20")
    // },
    // {
    //   title: "Conversa 3",
    //   description: "Descrição da conversa 3",
    //   id: 3,
    //   messages: messages.slice(0, 2),
    //   bot: bots[0],
    //   updatedAt: new Date()
    // },
    // {
    //   title: "Conversa 4",
    //   description: "Descrição da conversa 4",
    //   id: 4,
    //   messages: messages.slice(0, 0),
    //   bot: bots[0],
    //   updatedAt: new Date()
    // },
    // {
    //   title: "Conversa 5",
    //   description: "Descrição da conversa 5",
    //   id: 5,
    //   messages: messages,
    //   bot: bots[1],
    //   updatedAt: new Date("2023-06-13")
    // },
    // {
    //   title: "Conversa 6",
    //   description: "Descrição da conversa 6",
    //   id: 6,
    //   messages: messages,
    //   bot: bots[0],
    //   updatedAt: new Date("2023-06-13")
    // }
  ]
}


renderApp(initialProps)