import InputMessage from './InputMessage.jsx';
import { Col } from '../../Base/Grid/index.jsx';
import MessagesList from './MessagesList.jsx';
import Header from './Header.jsx';
import BotsList from './Bots/index.jsx';
import ConversationDetails from './ConversationDetails.jsx';
import Actions from './Actions.jsx';

export default function Chatbox(props) {
    return (
        <Col className="justify-between overflow-hidden">
            {props.availableConfig?.length && !props.hideHeader &&
                <Header
                    isMobile={props.isMobile}
                    showDetails={props.showDetails}
                    showConversations={props.showConversations}
                    availableConfig={props.availableConfig}
                    allowConversations={props.allowConversations}
                    onSelectConfig={props.onSelectConfig}
                    onDeleteConversation={props.onDeleteConversation}
                />
            }
            <Col className="lg:px-12 items-start justify-start overflow-auto h-full">
                    {props.showDetails
                        ? <ConversationDetails conversation={props.conversation} onUpdateConversation={props.onUpdateConversation}/>
                        :
                        props.conversation?.bot || props?.conversation?.messages?.length || props.bots?.length === 1
                            ? <MessagesList
                                onSendMessage={props.onSendMessage}
                                messages={props.conversation?.messages}
                                ref={props.ref}
                                onRegenerate={props.onRegenerate}
                            />
                            : <BotsList onSelectBot={props.onSelectBot} bots={props.bots} />
                    }
            </Col>
            <Col className="lg:px-12 lg:pb-3">
                {(props?.conversation?.messages.length > 0 && props.onRegenerate) &&
                    <Actions showConversations={props.showConversations} isMobile={props.isMobile} onRegenerate={props.onRegenerate} />
                }
                <InputMessage
                    placeholder={props.placeholder}
                    onSendMessage={props.onSendMessage}
                    messageListRef={props.ref}
                />
            </Col>
        </Col>
    )
}