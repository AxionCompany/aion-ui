/* @refresh reload */
import renderer, { Providers } from './Main.jsx';

const initialProps = {
  ...Providers['AionProvider']({
    'tenant': '...',
    'userId': '...'
  }), // Example implementation using Lorem Ipsum Provider
  allowConversations: true,
  placeholder: "Type your message here...",
  regenerateLimitText: "It looks like I were unable to answer you message. Please try again with a different question.",
  botTypingCaption: "Typing...",
  hideHeader: false,
  bots: [],
  conversations: []
}

renderer(initialProps)