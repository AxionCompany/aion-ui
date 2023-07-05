import { Col } from "../../Base/Grid/index.jsx";
import ConversationCard from "./ConversationCard.jsx";

export default function ConversationList(props) {

    return (
        <Col className="overflow-y-scroll md:px-6 overflow-x-hidden">

            {Object.keys(props?.conversations).length === 0
                ? <span className="text-sm font-extrabold text-base-content opacity-30">Sem conversas</span>
                : Object.keys(props?.conversations)
                    .map((key, index) => (
                        <>
                            {props.conversations[key].length > 0 &&
                                (
                                    <span className={`text-sm font-extrabold text-base-content opacity-30 ${index > 0 ? 'mt-2' : ''}`}>
                                        {key === 'todayConversations' && 'Hoje'}
                                        {key === 'weekConversations' && 'Esta semana'}
                                        {key === 'oldConversations' && 'Antigas'}
                                    </span>
                                )
                            }
                            {props.conversations[key].map((conversation, i) => {
                                return (
                                    <>
                                        <ConversationCard
                                            key={index}
                                            title={conversation.title}
                                            bot={conversation.bot?.name}
                                            description={conversation.description}
                                            selected={props.selectedConversation === conversation.index}
                                            onClick={() => props.onSelectConversation(conversation.index)}
                                        />
                                        {(i + 1) < props.conversations[key].length &&
                                            <div className="divider before:bg-base-300 after:bg-base-300 m-0 p-0" />
                                        }
                                    </>
                                )
                            })}
                        </>
                    ))
            }
        </Col >
    )
}