import { Col } from "../../Base/Grid/index.jsx";
import ConversationCard from "./ConversationCard.jsx";

export default function ConversationList(props) {

    return (
        <Col className="aion-overflow-y-scroll md:aion-px-6 aion-overflow-x-hidden">

            {Object.keys(props?.conversations).length === 0
                ? <span className="aion-text-sm aion-font-extrabold aion-text-base-content aion-opacity-30">Sem conversas</span>
                : Object.keys(props?.conversations)
                    .map((key, index) => (
                        <>
                            {props.conversations[key].length > 0 &&
                                (
                                    <span className={`aion-text-sm aion-font-extrabold aion-text-base-content aion-opacity-30 ${index > 0 ? 'aion-mt-2' : ''}`}>
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
                                            <div className="aion-divider before:aion-bg-base-300 after:aion-bg-base-300 aion-m-0 aion-p-0" />
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