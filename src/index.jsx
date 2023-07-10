/* @refresh reload */
import renderer, { Providers } from './Main.jsx';

const {..._Providers} = {

// Example implementation using Aion Provider 
  ...Providers['AionProvider']({
    'tenant': '...',
    'userId': '...'
  })
};

const initialProps =  {
  ..._Providers,
  allowConversations: true,
  placeholder: "Type your message here...",
  regenerateLimitText: "It looks like I were unable to answer you message. Please try again with a different question.",
  botTypingCaption: "Typing...",
  hideHeader: false,
  conversationsWidth: "300px",
  // disableSendMessage:true,
  // bots: [{
  //   name: "Bot 1",
  //   description: "Descrição do Bot 1",
  // }],
  // conversations: []
}

renderer(initialProps)