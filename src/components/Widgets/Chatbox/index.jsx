import InputMessage from './InputMessage.jsx';
import { Col } from '../../Base/Grid/index.jsx';
import MessagesList from './MessagesList.jsx';
import Header from './Header.jsx';
import BotsList from './Bots/index.jsx';
import ConversationDetails from './ConversationDetails.jsx';
import Actions from './Actions.jsx';
import RenderMarkdown from "../../Base/RenderMarkdown.jsx";

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
            {props.isLoading
                ? (
                    <Col className="items-center self-auto justify-center w-full h-full">
                        <RenderMarkdown className="prose text-md font-extrabold text-base-content opacity-30 text-center">{props?.loadingState?.title}</RenderMarkdown>
                        <RenderMarkdown className="prose text-xs font-extrabold text-base-content opacity-30 text-center">{props?.loadingState?.description}</RenderMarkdown>
                    </Col>
                ) : (
                    <Col className="lg:px-12 items-start justify-start overflow-auto h-full">
                        {props.showDetails
                            ? <ConversationDetails conversation={props.conversation} />
                            : props.conversation?.bot || props?.conversation?.messages?.length
                                ? <MessagesList
                                    onSendMessage={props.onSendMessage}
                                    messages={props.conversation?.messages}
                                    ref={props.ref}
                                    onRegenerate={props.onRegenerate}
                                />
                                : props.bots.length
                                    ? <BotsList onSelectBot={props.onSelectBot} bots={props?.bots} bot={props.conversation?.bot} />
                                    : (
                                        <Col className="items-center justify-center w-full h-full">
                                            <RenderMarkdown className="prose text-md font-extrabold text-base-content opacity-30 text-center">{props?.emptyState.title}</RenderMarkdown>
                                            <RenderMarkdown className="prose text-xs font-extrabold text-base-content opacity-30 text-center">{props?.emptyState.description}</RenderMarkdown>
                                        </Col>
                                    )
                        }
                    </Col>
                )
            }
            <Col className="lg:px-12 lg:pb-3">
                {(props?.conversation?.messages.length > 0 && props.onRegenerate) &&
                    <Actions showConversations={props.showConversations} isMobile={props.isMobile} onRegenerate={props.onRegenerate} />
                }
                <InputMessage
                    disabled={props.disableSendMessage}
                    placeholder={props.placeholder}
                    onSendMessage={props.onSendMessage}
                    messageListRef={props.ref}
                />
            </Col>
        </Col>
    )
}