import { Col } from "../../Base/Grid/index.jsx";
import ConversationCard from "./ConversationCard.jsx";

export default function ConversationList(props) {
    const todayConversations = props?.conversations?.todayConversations
    const weekConversations = props?.conversations?.weekConversations
    const oldConversations = props?.conversations?.oldConversations

    return (
        <Col className="aion-overflow-y-scroll md:aion-px-6 aion-overflow-x-hidden">
            {todayConversations.length > 0 &&
                <span className="aion-text-sm aion-font-extrabold aion-text-gray-400">Hoje</span>
            }
            {todayConversations.map((conversation, index) => {
                return(
                    <>
                        <ConversationCard
                            key={index}
                            title={conversation.title}
                            bot={conversation.bot?.name}
                            description={conversation.description}
                            selected={index === props.selectedConversation}
                            onClick={() => props.onSelectConversation(index)}
                        />
                        {(index + 1) < todayConversations.length &&
                            <div className="aion-divider before:aion-bg-base-300 after:aion-bg-base-300 aion-m-0 aion-p-0" />
                        }
                    </>
                )
            })}
            {weekConversations.length > 0 &&
                <span className={`aion-text-sm aion-font-extrabold aion-text-gray-400 ${todayConversations.length > 0 && `aion-mt-4`}`}>Esta semana</span>
            }
            {weekConversations.map((conversation, index) => {
                return(
                    <>
                        <ConversationCard
                            key={(index + todayConversations.length)}
                            title={conversation.title}
                            bot={conversation.bot?.name}
                            description={conversation.description}
                            selected={(index + todayConversations.length) === props.selectedConversation}
                            onClick={() => props.onSelectConversation((index + todayConversations.length))}
                        />
                        {(index + 1) < weekConversations.length &&
                            <div className="aion-divider before:aion-bg-base-300 after:aion-bg-base-300 aion-m-0 aion-p-0" />
                        }
                    </>
                )
            })}
            {oldConversations.length > 0 &&
                <span className={`aion-text-sm aion-font-extrabold aion-text-gray-400 ${(todayConversations.length > 0 || weekConversations.length > 0) && `aion-mt-4`}`}>Antigas</span>
            }
            {oldConversations.map((conversation, index) => {
                return(
                    <>
                        <ConversationCard
                            key={(index + todayConversations.length + weekConversations.length)}
                            title={conversation.title}
                            bot={conversation.bot?.name}
                            description={conversation.description}
                            selected={(index + todayConversations.length + weekConversations.length) === props.selectedConversation}
                            onClick={() => props.onSelectConversation((index + todayConversations.length + weekConversations.length))}
                        />
                        {(index + 1) < oldConversations.length &&
                            <div className="aion-divider before:aion-bg-base-300 after:aion-bg-base-300 aion-m-0 aion-p-0" />
                        }
                    </>
                )
            })}
        </Col>
    )
}