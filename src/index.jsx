/* @refresh reload */
import renderer, { Providers } from './Main.jsx';

const initialProps = {
  ...Providers['OpenAiProvider']({
    apiKey: 'your-open-ai-key-here',
    maxLength: 12000,
    model: 'gpt-3.5-turbo',
    stream: true
  }),
  allowConversations: true, // Allow users to create and delete new threads
  bots: [{
    name: 'ChatGpt',
    description: 'ChatGpt',
    instructions: 'Your are a helpful assistant', // Instructions to be passed as "system prompt",
    suggestions: ['What is the meaning of life?', 'What is the best programming language?', 'What is the best programming language?'],
    introMessage: 'Hello, my name is ChatGpt. How can I help you today?'
  }],
  conversations: []
}

renderer(initialProps)