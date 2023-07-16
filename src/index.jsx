/* @refresh reload */
import renderer, { Providers } from './Main.jsx';

const initialProps = {
  ...Providers['LoremIpsumProvider']({
    stream: true
  }),
  conversationMaxWidth: '300px',
  allowConversations: true, // Allow users to create and delete new threads
  bots: [{
    name: 'ChatGpt',
    description: 'ChatGpt',
    instructions: 'Your are a helpful assistant', // Instructions to be passed as "system prompt",
    suggestions: ['What is the meaning of life?', 'What is the best programming language?', 'What is the best programming language?'],
    introMessage: 'Hello, my name is ChatGpt. How can I help you today?'
  }],
  conversations: [{
    title: 'Conversation with ChatGpt',
    description: 'How to write a file with python',
    bot:{
      name: 'ChatGpt',
      description: 'ChatGpt',
      instructions: 'Your are a helpful assistant', // Instructions to be passed as "system prompt",
      suggestions: ['What is the meaning of life?', 'What is the best programming language?', 'What is the best programming language?'],
      introMessage: 'Hello, my name is ChatGpt. How can I help you today?'
    },
    messages:[]
  },
  {
    title: 'Conversation 2',
    description: 'How to write a file with python',
    bot:{
      name: 'ChatGpt',
      description: 'ChatGpt',
      instructions: 'Your are a helpful assistant', // Instructions to be passed as "system prompt",
      suggestions: ['What is the meaning of life?', 'What is the best programming language?', 'What is the best programming language?'],
      introMessage: 'Hello, my name is ChatGpt. How can I help you today?',
    },
    messages:[]
}]
}

renderer(initialProps)