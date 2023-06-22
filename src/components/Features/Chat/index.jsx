import Chatbox from '../../Widgets/Chatbox';
import Conversations from '../../Widgets/Conversations';
import { Row, Col } from '../../Base/Grid';
import { createSignal } from 'solid-js';

const isMobile = window.innerWidth < 768;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const _availableConfig = [
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

function Chat(props) {

    const availableConfig = props.availableConfig || _availableConfig;
    const defaultTitle = props.defaultTitle || "Chat";
    const defaultDescription = props.defaultDescription || "Chat";
    const placeholder = props.placeholder || "Digite sua mensagem aqui...";
    const botTypingCaption = props.botTypingCaption || "Digitando...";

    const [selectedConversation, setSelectedConversation] = createSignal(0);
    const [conversations, setConversations] = createSignal(props.conversations);
    const [bots, setBots] = createSignal(props.bots);
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

            let response;
        
            // Calling onSendMessage callback if provided
            if (props.onSendMessage) {
                response = await props.onSendMessage(
                    message,
                    { conversation: conversations[selectedConversation()] }
                );
            } else {
                await sleep(3000) // simulate bot typing
                response = "Olá, eu sou o chatbot";
            }

            // Adding bot response to conversation, removing "bot typing"
            updateConversations({ author: "chatbot", text: response }, true)
        }

        // adding event listeners to suggestion buttons
        setTimeout(() => {
            const suggestionBtns = document.getElementsByClassName('suggestion-btn');
            for (let i = 0; i < suggestionBtns.length; i++) {
                suggestionBtns[i].addEventListener('click', () => {
                    handleSendMessage({
                        author: "user",
                        text: suggestionBtns[i].innerText
                    });
                });
            }
        }, 100);
    }

    const handleCreateConversation = () => {

        const newConversations = [...conversations(), {
            title: defaultTitle,
            description: defaultDescription,
            id: conversations().length + 1,
            messages: []
        }];
        setConversations(newConversations);
        setSelectedConversation(newConversations.length - 1);
        isMobile && setShowConversations(false);

        // Create conversation via callback
        if (props.onCreateConversation) {
            props.onCreateConversation({ conversation: newConversations[newConversations.length - 1] });
        }
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
        setShowDetails(false)

        // Delete Conversation via callback
        if (props.onDeleteConversation) {
            props.onDeleteConversation(conversations[selectedConversation()]);
        }
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