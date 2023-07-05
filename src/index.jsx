/* @refresh reload */
import RenderAppInstance from './Main.jsx';

import { AionProvider, OpenAiProvider, EchoProvider, LoremIpsumProvider } from './providers/index.js';

const renderApp = RenderAppInstance;

const initialProps = {
  // ...AionProvider({
  //   tenant: '...',
  //   userId: '...',
  // }),
  // ...OpenAiProvider({
  //   apiKey: 'sk-...',
  //   maxLength:12000,
  //   model:'gpt-3.5-turbo',
  //   stream: true
  // }),
  // ...LoremIpsumProvider({ stream: true }),
  allowConversations: true,
  placeholder: "Type your message here...",
  regenerateLimitText: "It looks like I were unable to answer you message. Please try again with a different question.",
  botTypingCaption: "Typing...",
  hideHeader: false,
  bots: [],
  conversations: []
}


renderApp(initialProps)