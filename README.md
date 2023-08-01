# AI-ON UI 


## A ChatGPT-like (Multi) Chatbot Snippet
This npm module allows you to add a chatGPT-like chatbot UI widget to your website or application. Built with Solid.js, this widget provides a seamless way to interact with multiple chatbots at once. 
Users can easily create integrations through simple props.


## Build with JSX, Integrate with any framework

Built on top of solid.js and web components, this widget can be integrated with any framework, and yet it leverages the power of JSX to provide a seamless developer experience.

## Demo (various themes)
[Lofi](https://aion-ui.web.app/?aion_theme=lofi)
[Dark](https://aion-ui.web.app/?aion_theme=dark)
[Light](https://aion-ui.web.app/?aion_theme=light)
[Cupcake](https://aion-ui.web.app/?aion_theme=cupcake)
[Emerald](https://aion-ui.web.app/?aion_theme=emerald)
[Synthwave](https://aion-ui.web.app/?aion_theme=synthwave)
[Bumblebee](https://aion-ui.web.app/?aion_theme=bumblebee)
[Autumn](https://aion-ui.web.app/?aion_theme=autumn)

... and many others you can use from [DaisyUI](https://daisyui.com/themes). Just add `?aion_theme=THEME_NAME` query parameter to the url.

## LT;DR
Minimal implementation Using OpenAI Provider.

```html
<html>
    <script type="module">

    import renderer, { Providers } from 'https://cdn.jsdelivr.net/npm/@ai-on/ui';
        
        if (!renderer) {
            console.error("renderer not found");
        }

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

    </script>
    <body>
    <div id="aion-ui" width="100%" height="100%" ></div>
    </body>
</html>
```

Please, note that it is not recommended to use this provider in production as your api key would be visible.
For production, we recommend using other Providers, or implementing your own that comunicates with your backend.

## Features

-   **Multi-Chatbot**: :robot: :robot: Easily integrate multiple chatbots into your UI, but you can also use it with a single chatbot
-   **Out-of-the-box Themes**: :paintbrush:	Choose from a variety of built-in themes from DaisyUI or create your own by cutomizing this widget
-   **Responsive**: :iphone: This widget is responsive and mobile-friendly.
-   **Customizable**: :wrench: Customize the look and feel of the chatbot widget with a familiar toolkit for modern web developers: Tailwind CSS and JSX
-   **Small Bundle**: :ant:	 The entire codebase is ~250kb, and ~50kb gzipped. This means that your users will have a fast experience, even on slow connections.
-   **Easy to use**: :sparkles:	Simply add the widget to your project and pass in the props. You don't have to worry about managing the state, or even leaking css to the rest of your application. It's all encapsulated in the widget.
-   **Built with Solid.js**: :computer: Built with Solid.js, this widget can be integrated with any framework. Plus, you get JSX with no version conflicts with other frameworks.
-   **Bateries Included**: :link: This widget comes with OpenAI Integration provider. If you want to enhance your chatbot capabilities even further with user management, automatic memory management and interacting with your custom knowledge base, AION Provider is also included. You can also easily integrate your own chatbot provider. More built-in providers coming soon.
-   **Open Source**: :octocat: Under GNU GPL v3.0 license, this widget is open source and free to use. You can also contribute to the project by submitting a pull request. 

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
<script src="https://cdn.jsdelivr.net/npm/@ai-on/ui" type="module"></script>
```

## Usage

If you imported the module using NPM or Yarn, you can import the module like so:

```jsx
import renderer , { Providers } from '@ai-on/ui';
// {... rest of your code here ...}
```

If you imported the module using CDN, you can import the module like so, in your `<script>`tag:

```html
<script src="https://cdn.jsdelivr.net/npm/@ai-on/ui"  type="module"> // Import the module here if you are using CDN
    import renderer, { Providers } from '@ai-on/ui'; // note that it is a ESM (ES Module), so you can to import it inside the script tag
    // {... rest of your code here ...}
</script>
```

Then, you can pass in the props to the widget like so:

```js
const initialProps = {
    onSendMessage: async ({ message, conversation }, stream) => {
        // Implement your logic when user sends a message here  || or use an existing provider
    },
    onCreateConversation: ({conversation}) => { 
        // Implement your logic for when user creates a new conversation here || or use an existing provider
    },
    onDeleteConversation: ({convvesation}) => { 
        // Implement your logic for when user deletes a conversation here || or use an existing provider
    },
     onInit: ({setSelectedConversation, setConversations, setBots, setShowConversations, setShowDetails, setShowRegenerate}) => { 
        // Implement your logic for when the widget is initialized here. You can use the setters to update the state of the widget upon initialization || or use an existing provider
    },
    placeholder: "Type your message here...",
    regenerateLimitText: "It looks like I were unable to answer you message. Please try again with a different question.",
    botTypingCaption: "Typing...",
    allowConversations: true,
    hideHeader: false,
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

renderer(initialProps);
```

And, finally, you can render the widget like so in your html file:

```html
<body>
    <!-- ... Rest of your html code here ... -->
    <!-- This is where the widget will be rendered. Please, note that the it's id should be 'aion-ui' -->
    <div id="aion-ui" width="100%" height="100%" ></div> 
</body>
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
| conversations | Array | List of conversations that are available to the user. | Yes | N/A | ```[ conversation ]``` |
| conversation.title | String | Title of the conversation. | Yes | N/A | ```"Thread 1"``` |
| conversation.description | String | Description of the conversation. | Yes | N/A | ```"Description from thread 1"``` |
| conversation.id | Number | Id of the conversation. | Yes | N/A | ```1``` |
| conversation.bot | Object | Bot that is associated with the conversation. | Yes | N/A | ``` bot``` |
| conversation.updatedAt | Date | Date of the last message in the conversation. | Yes | N/A | ```updatedAt: new Date("2023-06-20")``` |
| conversation.messages | Array | List of messages that are available in the conversation. | Yes | N/A | ```[ message ]``` |
| message.id | Number | Id of the message. | Yes | N/A | ```1``` |
| message.text | String | Text of the message. | Yes | N/A | ```"Hello, my name is bot 1. How can I help you today?"``` |
| message.createdAt | Date | Date of the message. | Yes | N/A | ```new Date("2023-06-20")``` |
| message.author | String | Author of the message. | Yes | N/A | ```Enum: ["user", "chatbot"]```|

## License

GNU GPLv3 ©

## Author
Made with ❤️ by AI-ON Team 👋🏽 Get in touch!


