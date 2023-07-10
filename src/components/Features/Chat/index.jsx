import Chatbox from '../../Widgets/Chatbox/index.jsx';
import Conversations from '../../Widgets/Conversations/index.jsx';
import { Row, Col } from '../../Base/Grid/index.jsx';
import { createSignal, createEffect } from 'solid-js';

const isMobile = window.innerWidth < 768;

const _availableConfig = [
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

    let messagesList;

    const availableConfig = props.availableConfig || _availableConfig;
    const defaultTitle = props.defaultTitle || "Chat";
    const defaultDescription = props.defaultDescription || "Chat";
    const placeholder = props.placeholder || "Digite sua mensagem aqui...";
    const botTypingCaption = props.botTypingCaption || "Digitando...";
    const createConversationLabel = props.createConversationLabel || "Nova conversa";
    const allowConversations = props.allowConversations || false;
    const hideHeader = props.hideHeader || false;
    const disableSendMessage = props.disableSendMessage || false;
    const conversationMaxWidth = props.conversationMaxWidth || "400px";
    const poweredBy = (typeof props.poweredBy !== 'undefined')
        ? props.poweredBy
        : {
            label: "Powered by",
            value: "ai-on.co",
            url: "https://ai-on.co"
        }

    const [selectedConversation, setSelectedConversation] = createSignal(0);
    const [conversations, setConversations] = createSignal(props.conversations || []);
    const [bots, setBots] = createSignal(props.bots);
    const [showConversations, setShowConversations] = createSignal(!hideHeader && allowConversations && true);
    const [showDetails, setShowDetails] = createSignal(false);
    const [regenerateCount, setRegenerateCount] = createSignal(0);
    const [showRegenerate, setShowRegenerate] = createSignal(true);

    createEffect(() => {
        if (props.onInit)
            props.onInit({ setSelectedConversation, setConversations, setBots, setShowConversations, setShowDetails, setShowRegenerate })
    });

    createEffect(() => {
        if (conversations().length === 0) {
            handleCreateConversation()
        }
    });

    const groupConversations = conversations => {

        let todayConversations = []
        let weekConversations = []
        let oldConversations = []
        const today = new Date()

        conversations.forEach((conversation, i) => {
            const difference = today - new Date(conversation.updatedAt)
            if (difference < 86400000) {
                todayConversations = [...todayConversations, { ...conversation, index: i }]
            } else if (difference < (86400000 * 7)) {
                weekConversations = [...weekConversations, { ...conversation, index: i }]
            } else {
                oldConversations = [...oldConversations, { ...conversation, index: i }]
            }
        });

        return {
            todayConversations,
            weekConversations,
            oldConversations
        }
    }

    createEffect(() => {
        if (selectedConversation()) {
            setTimeout(() => messagesList.scrollTo({
                top: messagesList.scrollHeight,
                behavior: 'smooth'
            }), 1)
        }
    });

    const updateConversations = (message, removeBotTyping = false, stream = false) => {

        if (message.author === "user") {
            if (message.type) {
                delete (message.type)
            } else {
                setShowRegenerate(true)
                setRegenerateCount(0)
            }
        }

        const newConversations = [...conversations()]
        let messages = newConversations[selectedConversation()]?.messages || [];
        if (removeBotTyping) {
            messages = messages.filter(message => message.text !== botTypingCaption);
        }
        if (stream && messages?.[messages.length - 1]?.author === "chatbot") {
            messages[messages.length - 1].text = (messages?.[messages.length - 1]?.text || '') + message.text;
        } else {
            messages = [...messages, message];
        }
        newConversations[selectedConversation()] = {
            ...newConversations[selectedConversation()],
            messages
        }
        setConversations(newConversations);

        // scroll to bottom animated
        setTimeout(() => messagesList.scrollTo({
            top: messagesList.scrollHeight,
        }), 100);

    }


    const handleSendMessage = async (message) => {

        // Adding message
        updateConversations(message);
        if (message.type) delete (message.type)

        if (message.author === "user") {
            // Adding "bot typing" to conversation while waiting for response
            updateConversations({ author: "chatbot", text: botTypingCaption });

            // Calling onSendMessage callback if provided
            if (props.onSendMessage) {
                let messages = conversations()[selectedConversation()]?.messages;
                messages = messages.filter(message => message.text !== botTypingCaption);
                props
                    .onSendMessage(
                        { message, conversation: { ...conversations()[selectedConversation()], messages } },
                        (text) => updateConversations({ author: 'chatbot', text }, true, true)
                    )
                    .then((text) => text && updateConversations({ author: 'chatbot', text }, true, false))
                    .catch((error) => {
                        console.log(error);
                    })

            }
        }

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

    const handleCreateConversation = async () => {
        let id;
        // Create conversation via callback
        if (props.onCreateConversation) {
            id = await props.onCreateConversation();
        }

        const newConversations = [...conversations(), {
            title: defaultTitle,
            description: defaultDescription,
            id: id || conversations().length + 1,
            messages: [],
            createdAt: new Date(),
            updatedAt: new Date(),
        }];

        setConversations(newConversations);
        setSelectedConversation(newConversations.length - 1);
        isMobile && setShowConversations(false);

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
            messages: newConversations[selectedConversation()]?.messages || []
        }

        setConversations(newConversations);

        botMessage && handleSendMessage({
            author: "chatbot",
            text: botMessage
        })

    }

    const handleSelectConfig = (config) => {
        const configMap = {
            'toggle_conversations': () => setShowConversations(!showConversations()),
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

    const handleDeleteConversation = async () => {

        // Delete Conversation via callback
        if (props.onDeleteConversation) {
            const deleted = await props.onDeleteConversation({ conversation: conversations()[selectedConversation()] });
            if (!deleted) {
                window.alert('You can not delete this conversation')
                return;
            }
        }

        const newConversations = [...conversations()];
        newConversations.splice(selectedConversation(), 1);
        setConversations(newConversations);
        setSelectedConversation(0);
        setShowConversations(true);
        setShowDetails(false)

    }

    const handleRegenerateAnswer = () => {
        if (regenerateCount() < 3) {
            setRegenerateCount(regenerateCount() + 1)
            conversations()?.[selectedConversation()]?.messages.pop()
            const lastUserMessage = conversations()?.[selectedConversation()]?.messages.pop()
            lastUserMessage.type = "regenerate"
            handleSendMessage(lastUserMessage)
        } else {
            setRegenerateCount(0)
            setShowRegenerate(false)
            const lastBotMessage = conversations()?.[selectedConversation()]?.messages.pop()
            lastBotMessage.text = props.regenerateLimitText
            lastBotMessage.type = "regenerate"
            updateConversations(lastBotMessage)
        }
    }

    return (
        <Row className="h-full overflow-auto">
            {
                allowConversations && (
                    <Conversations
                        conversationMaxWidth={conversationMaxWidth}
                        showConversations={showConversations()}
                        conversations={groupConversations(conversations())}
                        onSelectConversation={handleSelectConversation}
                        selectedConversation={selectedConversation()}
                        onCreateConversation={handleCreateConversation}
                        createConversationLabel={createConversationLabel}
                        poweredBy={poweredBy}
                        isMobile={isMobile}
                    />
                )
            }
            {
                !(showConversations() && isMobile) &&
                < Chatbox
                    disableSendMessage={disableSendMessage}
                    isMobile={isMobile}
                    ref={messagesList}
                    allowConversations={allowConversations}
                    hideHeader={hideHeader}
                    showConversations={showConversations()}
                    showDetails={showDetails()}
                    conversation={conversations()?.[selectedConversation()]}
                    onSelectConfig={handleSelectConfig}
                    availableConfig={availableConfig}
                    onSelectBot={handleSelectBot}
                    bots={bots()}
                    onRegenerate={showRegenerate() && handleRegenerateAnswer}
                    placeholder={placeholder}
                    onSendMessage={handleSendMessage}
                    onDeleteConversation={handleDeleteConversation}
                />
            }
        </Row>
    )
}

export default Chat;