import InputMessage from './InputMessage';
import { Col, Row } from '../../Base/Grid';
import MessagesList from './MessagesList';
import Configuration from './Configuration';
import BotsList from './Bots';
import ConversationDetails from './ConversationDetails';

import Actions from './Actions';

import { createEffect } from 'solid-js';

export default function Chatbox(props) {
    let messagesList;

    return (
        <Col className="lg:py-4 lg:px-12 justify-between overflow-hidden">
            <Col className="overflow-auto">
                {props.availableConfig?.length &&
                    <Configuration
                        showDetails={props.showDetails}
                        showConversations={props.showConversations}
                        availableConfig={props.availableConfig}
                        onSelectConfig={props.onSelectConfig}
                        onDeleteConversation={props.onDeleteConversation}
                    />
                }
                { props.showDetails
                    ? <ConversationDetails conversation={props.conversation} />
                    : 
                    props.selectedBot || props.messages?.length || props.bots?.length === 1
                        ? <MessagesList
                            onSendMessage={props.onSendMessage}
                            messages={props.messages}
                            ref={messagesList}
                        />
                        : <BotsList onSelectBot={props.onSelectBot} bots={props.bots} />
                }
            </Col>
            <Col>
                {props.onRegenerate && <Actions onRegenerate={props.onRegenerate} />}
                <InputMessage
                    placeholder={props.placeholder}
                    onSendMessage={props.onSendMessage}
                    messageListRef={messagesList}
                />
            </Col>
        </Col>
    )
}