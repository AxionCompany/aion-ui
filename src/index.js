/* @refresh reload */
import renderer, { Providers } from "./Main.jsx";

const getQueryParams = async () => {
  let params = {};
  window.location?.search?.split("?")?.[1]?.split("&")?.forEach((param) => {
    const [key, value] = param.split("=");

    if (key === "aion_theme") {
      // add theme to element via data-theme attribute
      document.getElementById("aion-ui").setAttribute("data-theme", value);
    }
    params[key] = value;
  });
  return params;
};

getQueryParams().then((params) => {
  const initialProps = {
    ...Providers[params.aion_provider || "LoremIpsumProvider"]({
      stream: true,
      ...params,
    }),
    ...params,
    conversationMaxWidth: "300px",
    allowConversations: true, // Allow users to create and delete new threads
    bots: [{
      name: 'ChatGpt',
      description: 'ChatGpt',
      instructions: 'Your are a helpful assistant', // Instructions to be passed as "system prompt",
      suggestions: ['What is the meaning of life?', 'How to write a file with python?', 'What is the best programming language?'],
      introMessage: 'Hello, my name is ChatGpt. How can I help you today?'
    }],
    detailsMarkdown: (props) => {
      return `# ${props.conversation?.title || "No Title"} \n` +
        ` **${props.conversation?.bot?.name || "Not Defined"}**  ${(props.conversation?.bot?.description)
          ? (": " + props.conversation?.bot?.description)
          : ""
        }\n` +
        (props?.conversation?.bot?.id
          ? `id: ${props.conversation?.bot?.id} \n`
          : "")
    }

    conversations: [
      {
        title: 'Conversation with ChatGpt',
        description: 'How to write a file with python',
        bot: {
          name: 'ChatGpt',
          description: 'ChatGpt',
          instructions: 'Your are a helpful assistant', // Instructions to be passed as "system prompt",
          suggestions: ['What is the meaning of life?', 'How to write a file with python?', 'What is the best programming language?'],
          introMessage: 'Hello, my name is ChatGpt. How can I help you today?'
        },
        messages: [
          {
            "text": "Hello, my name is ChatGpt. How can I help you today?",
            "author": "bot",
          }
        ]
      },
      {
        title: 'Conversation 2',
        description: 'How to write a file with python',
        bot: {
          name: 'ChatGpt',
          description: 'ChatGpt',
          instructions: 'Your are a helpful assistant', // Instructions to be passed as "system prompt",
          suggestions: ['What is the meaning of life?', 'What is the best programming language?', 'What is the best programming language?'],
          introMessage: 'Hello, my name is ChatGpt. How can I help you today?',
        },
        messages: []
      }
    ]
  };

  renderer(initialProps);
});
