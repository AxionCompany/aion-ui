# AI-ON UI - ChatGPT-like (Mulit)Chatbot Snippet

This npm module allows you to add a chatbot UI widget to your front-end Node.js projects. Built with Solid.js, this widget provides a seamless way to interact with multiple chatbots at once. 
Users can easily create integrations through simple props.

## Built with JSX, Integrate with any framework

Built on top of solid.js and web components, this widget can be integrated with any framework, and yet it leverages the power of JSX to provide a seamless developer experience.

## Features

-   **Multi-Chatbot**: Easily integrate multiple chatbots into your UI
-   **Out-of-the-box Themes**: Choose from a variety of themes
-   **Responsive**: This widget is responsive and mobile-friendly
-   **Customizable**: Customize the look and feel of the chatbot widget with the familiar modern developer toolkit: Tailwind CSS and JSX
-   **Easy to use**: Simply add the widget to your project and pass in the props
-   **Built with Solid.js**: Built with Solid.js, this widget can be integrated with any framework
-   **Open Source**: This widget is open source and free to use
-   **Bateries Included**: This widget comes with OpenAI Integration provider. If you want to enhance your chatbot capabilities even further with user management, automatic memory management and interacting with your custom knowledge base, there's the AION Provider. You can also easily integrate your own chatbot provider. More built-in providers coming soon.

## Installation

### NPM
```bash
npm install @ai-on/ui
```

### Yarn
```bash
yarn add @ai-on/ui
```

### CDN
```html
<script src="https://unpkg.com/@ai-on/ui"></script>
```

## Usage

If you imported the module using NPM or Yarn, you can import the module like so:

```jsx
import RenderChatbotInstance from '@ai-on/ui';

 const renderApp = RenderAppInstance('your-div-id') // Pass in the id of the div you want to render the chatbot in
```

If you imported the module using CDN, you can import the module like so, in your `<script>`tag:

```jsx
const renderApp = window.RenderAppInstance('your-div-id') // Pass in the id of the div you want to render the chatbot in
```

Then, you can pass in the props to the widget like so:

```jsx
const initialProps = {
    onSendMessage: async ({ message, conversation }, stream) => {
        // Implement your logic when user sends a message here
    },
    onCreateConversation: () => { 
        // Implement your logic for when user creates a new conversation here 
    },
    onDeleteConversation: () => { 
        // Implement your logic for when user deletes a conversation here 
    },
    placeholder: "Type your message here...",
    regenerateLimitText: "It looks like I were unable to answer you message. Please try again with a different question.",
    botTypingCaption: "Typing...",
    allowConversations: true,
    bots: [ // List your available chatbots here
        {
            name: "Bot 1",
            description: "Bot 1 description",
            id: 1,
            introMessage: "Hello, my name is bot 1. How can I help you today?",
            suggestions: ["What's franch for 'bread'?", 'How are you doing? (answer as joey from friends)', 'What is the meaning of life?']
        },
        {
            name: "Bot 2",
            description: "Bot 2 description",
            id: 2,
            introMessage: "Hello, my name is bot 2. How can I help you today?",
            suggestions: ["What's english for 'pão'?", 'How are you doing? (answer as chewbaca from star wars)', 'Why does the universe exists?']
        }
    ],
    conversations: [ // List your conversations here
        {
            title: "Thread 1",
            description: "Description from thread 1",
            id: 1,
            messages: messages,
            bot: bots[0],
            updatedAt: new Date("2023-06-20")
        },
        {
            title: "Thread 2",
            description: "Descrição longa da conversa 2, adicionando mais contexto e informações",
            id: 2,
            messages: messages,
            bot: bots[1],
            updatedAt: new Date("2023-06-20")
        },
    ]
};
```
 Then, you can update the props like so:
    
```jsx
renderApp(initialProps);
```

## Props

| Prop | Type | Description | Required | Default | Example |
| --- | --- | --- | --- | --- | --- |
| onSendMessage | Function | Callback function that is called when the user sends a message. | Yes | N/A | ```async ({ message, conversation }, stream) => { // Implement your logic when user sends a message here }``` |
| onCreateConversation | Function | Callback function that is called when the user creates a new conversation. | Yes | N/A | ```async () => { // Implement your logic for when user creates a new conversation here }``` |
| onDeleteConversation | Function | Callback function that is called when the user deletes a conversation. | Yes | N/A | ```async () => { // Implement your logic for when user deletes a conversation here }``` |
| placeholder | String | Placeholder text for the input field. | No | "Type your message here..." | ```"Type your message here..."``` |
| regenerateLimitText | String | Text that is shown when the user reaches the limit of message regenerations. | No | "It looks like I were unable to answer you message. Please try again with a different question." | ```"It looks like I were unable to answer you message. Please try again with a different question."``` |
| botTypingCaption | String | Text that is shown when the bot is typing. | No | "Typing..." | ```"Typing..."``` |
| allowConversations | Boolean | Whether or not the user can create and delete conversations. | No | true | ```true``` |
| bots | Array | List of bots that are available to the user. | Yes | N/A | ```[ bot ]``` |
| bot.name | String | Name of the bot. | Yes | N/A | ```"Bot 1"``` |
| bot.description | String | Description of the bot. | Yes | N/A | ```"Bot 1 description"``` |
| bot.id | Number | Id of the bot. | Yes | N/A | ```1``` |
| bot.introMessage | String | Intro message of the bot. | Yes | N/A | ```"Hello, my name is bot 1. How can I help you today?"``` |
| bot.suggestions | Array | List of suggestions that are shown to the user when the bot is typing. | Yes | N/A | ```["What's franch for 'bread'?", 'How are you doing? (answer as joey from friends)', 'What is the meaning of life?']``` |
| conversations | Array | List of conversations that are available to the user. | Yes | N/A | ```[ { title: "Thread 1", description: "Description from thread 1", id: 1, messages: messages, bot: bots[0], updatedAt: new Date("2023-06-20") }, { title: "Thread 2", description: "Descrição longa da conversa 2, adicionando mais contexto e informações", id: 2, messages: messages, bot: bots[1], updatedAt: new Date("2023-06-20") }, ]``` |
| conversations[].title | String | Title of the conversation. | Yes | N/A | ```"Thread 1"``` |
| conversations[].description | String | Description of the conversation. | Yes | N/A | ```"Description from thread 1"``` |
| conversations[].id | Number | Id of the conversation. | Yes | N/A | ```1``` |
| conversations[].bot | Object | Bot that is associated with the conversation. | Yes | N/A | ``` bot``` |
| conversations[].updatedAt | Date | Date of the last message in the conversation. | Yes | N/A | ```updatedAt: new Date("2023-06-20")``` |
| conversations[].messages | Array | List of messages that are available in the conversation. | Yes | N/A | ```[ message ]``` |
| message.id | Number | Id of the message. | Yes | N/A | ```1``` |
| message.text | String | Text of the message. | Yes | N/A | ```"Hello, my name is bot 1. How can I help you today?"``` |
| message.createdAt | Date | Date of the message. | Yes | N/A | ```new Date("2023-06-20")``` |
| message.author | String | Author of the message. | Yes | N/A | Enum: ["user", "chatbot"]|

## License

GNU GPLv3 ©

## Author
Made with ❤️ by AI-ON Team 👋🏽 Get in touch!


[![Github Badge](https://img.shields.io/badge/-AI--ON-6633cc?style=flat-square&logo=Github&logoColor=white&link=
[![Linkedin Badge](https://img.shields.io/badge/-João%20Pedro%20Schmitz-6633cc?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/joaopedroschmitz/)](https://www.linkedin.com/in/joaopedroschmitz/)  


