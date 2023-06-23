/* @refresh reload */
import RenderAppInstance from './Main';

const renderApp = RenderAppInstance('root')

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

const bots = [
  {
    name: "Bot 1",
    description: "Descrição do bot 1",
    id: 1,
    introMessage: "Olá, eu sou o bot 1",
    suggestions: ['sugestão 1', 'sugestão 2', 'sugestão 3']
  },
  {
    name: "Bot 2",
    description: "Descrição do bot 2",
    id: 2
  }
];


const availableConfig = [
  {
    id: 'show_conversations',
    name: 'Mostrar Conversas',
  },
  {
    id: 'hide_conversations',
    name: 'Esconder Conversas',
  },
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
  onCreateConversation: () => { },
  onDeleteConversation: () => { },
  onSendeMessage: () => { },
  onRegenerateMassage: () => { },
  placeholder: "Digite sua mensagem aqui...",
  botTypingCaption: "Digitando...",
  availableConfig,
  bots: bots,
  conversations: [
    {
      title: "Conversa 1",
      description: "Descrição da conversa 1",
      id: 1,
      messages: messages,
      bot: bots[0],
      updatedAt: new Date("2023-06-20")
    },
    {
      title: "Conversa 2",
      description: "Descrição longa da conversa 2, adicionando mais contexto e informações",
      id: 2,
      messages: messages,
      bot: bots[1],
      updatedAt: new Date("2023-06-20")
    },
    {
      title: "Conversa 3",
      description: "Descrição da conversa 3",
      id: 3,
      messages: messages.slice(0, 2),
      bot: bots[0],
      updatedAt: new Date()
    },
    {
      title: "Conversa 4",
      description: "Descrição da conversa 4",
      id: 4,
      messages: messages.slice(0, 0),
      bot: bots[0],
      updatedAt: new Date()
    },
    {
      title: "Conversa 5",
      description: "Descrição da conversa 5",
      id: 5,
      messages: messages,
      bot: bots[1],
      updatedAt: new Date("2023-06-13")
    },
    {
      title: "Conversa 6",
      description: "Descrição da conversa 6",
      id: 6,
      messages: messages,
      bot: bots[0],
      updatedAt: new Date("2023-06-13")
    }
  ]
}


renderApp(initialProps)