import Chatbox from '../../Widgets/Chatbox';
import Conversations from '../../Widgets/Conversations';
import { Row, Col } from '../../Base/Grid';
import { createSignal } from 'solid-js';

const isMobile = window.innerWidth < 768;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const text1 = "#title\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam lacinia, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget aliquam lacinia, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl.";
const text2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod. ![imagem-teste](https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.webp)"
const placeholder = "Digite sua mensagem aqui...";
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
];

const _bots = [
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

const _conversations = [
    {
        title: "Conversa 1",
        description: "Descrição da conversa 1",
        id: 1,
        messages: messages
    },
    {
        title: "Conversa 2",
        description: "Descrição longa da conversa 2, adicionando mais contexto e informações",
        id: 2,
        messages: messages
    },
    {
        title: "Conversa 3",
        description: "Descrição da conversa 3",
        id: 3,
        messages: messages.slice(0, 2)
    },
    {
        title: "Conversa 4",
        description: "Descrição da conversa 4",
        id: 4,
        messages: messages.slice(0, 0)
    },
    {
        title: "Conversa 5",
        description: "Descrição da conversa 5",
        id: 5,
        messages: messages
    },
    {
        title: "Conversa 6",
        description: "Descrição da conversa 6",
        id: 6,
        messages: messages
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

const botTypingCaption = "Digitando...";

function Chat(props) {

    const [selectedConversation, setSelectedConversation] = createSignal(0);
    const [conversations, setConversations] = createSignal(_conversations);
    const [bots, setBots] = createSignal(_bots);
    const [showConversations, setShowConversations] = createSignal(true);
    const [showDetails, setShowDetails] = createSignal(false);

    const updateConversations = (message, removeBotTyping = false) => {
        const newConversations = [...conversations()]
        let messages = newConversations[selectedConversation()].messages;
        if (removeBotTyping) {
            messages = messages.filter(message => message.text !== botTypingCaption);
        }
        newConversations[selectedConversation()] = {
            ...newConversations[selectedConversation()],
            messages: [...messages, message]
        }
        setConversations(newConversations);
    }

    const handleSendMessage = async (message) => {

        // Adding message
        updateConversations(message);

        if (message.author === "user") {
            // Adding "bot typing" to conversation while waiting for response
            updateConversations({ author: "chatbot", text: botTypingCaption });

            // TO DO: INTEGRATE WITH BACKEND
            let response;
            await sleep(3000) // simulate bot typing
            response = "Olá, eu sou o chatbot"; // TO DO: get response from backend

            // Adding bot response to conversation, removing "bot typing"
            updateConversations({ author: "chatbot", text: response }, true)
        }

        // adding event listeners to suggestion buttons
        setTimeout(() => {
            const suggestionBtns = document.getElementsByClassName('suggestion-btn');
            for (let i = 0; i < suggestionBtns.length; i++) {
                suggestionBtns[i].addEventListener('click', () => {
                    handleSendMessage({
                        author: "chatbot",
                        text: suggestionBtns[i].innerText
                    });
                });
            }
        }, 100);
    }

    const handleCreateConversation = () => {

        const newConversations = [...conversations(), {
            title: "Nova Conversa",
            description: "Descrição da nova conversa",
            id: conversations().length + 1,
            messages: []
        }];
        setConversations(newConversations);
        setSelectedConversation(newConversations.length - 1);
        isMobile && setShowConversations(false);

        // TO DO: INTEGRATE WITH BACKEND
    }

    const handleSelectBot = (bot) => {
        const newConversations = [...conversations()];

        let botMessage = '';
        if (bot.introMessage) {
            botMessage += bot.introMessage + '\n';
        }
        if (bot.suggestions) {
            bot.suggestions.forEach(suggestion => {
                botMessage += `<button class="btn btn-outline m-2 shadow-md suggestion-btn">${suggestion}</button>`;
            })
        }

        newConversations[selectedConversation()] = {
            ...newConversations[selectedConversation()],
            bot: bot,
        }

        setConversations(newConversations);

        handleSendMessage({
            author: "chatbot",
            text: botMessage
        })

    }

    const handleSelectConfig = (config) => {
        const configMap = {
            'show_conversations': () => setShowConversations(true),
            'hide_conversations': () => setShowConversations(false),
            'new_conversation': () => handleCreateConversation(),
            'delete_conversation': () => window.delete_conversation.showModal(),
            'conversation_details': () => setShowDetails(!showDetails()),
        }
        configMap[config.id]();
    }

    const handleSelectConversation = (index) => {
        setSelectedConversation(index);
        isMobile && setShowConversations(false);
    }

    const handleDeleteConversation = () => {
        const newConversations = [...conversations()];
        newConversations.splice(selectedConversation(), 1);
        setConversations(newConversations);
        setSelectedConversation(0);
        setShowConversations(true);
        // TO DO: INTEGRATE WITH BACKEND
    }


    return (
        <Row className="justify-between h-full">
            <Conversations
                showConversations={showConversations()}
                conversations={conversations()}
                onSelectConversation={handleSelectConversation}
                selectedConversation={selectedConversation()}
                onCreateConversation={handleCreateConversation}
            />
            {!(isMobile && showConversations()) &&
                <Chatbox
                    showConversations={showConversations()}
                    showDetails={showDetails()}
                    conversation={conversations()?.[selectedConversation()]}
                    onSelectConfig={handleSelectConfig}
                    availableConfig={availableConfig}
                    selectedBot={conversations()?.[selectedConversation()]?.bot}
                    onSelectBot={handleSelectBot}
                    bots={bots()}
                    messages={conversations()?.[selectedConversation()]?.messages}
                    onRegenerate={() => { console.log('Clicked Regenerate Button') }}
                    placeholder={placeholder}
                    onSendMessage={handleSendMessage}
                    onDeleteConversation={handleDeleteConversation}
                />
            }
        </Row>
    )
}

export default Chat;