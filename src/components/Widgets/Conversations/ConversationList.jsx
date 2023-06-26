import { Col } from "../../Base/Grid/index.jsx";
import ConversationCard from "./ConversationCard.jsx";

export default function ConversationList(props) {

    return (
        <Col className="aion-overflow-y-scroll md:aion-px-6 aion-overflow-x-hidden">
            {props?.conversations?.map((conversation, index) => {
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
                        {(index + 1) < props?.conversations?.length &&
                            <div className="aion-divider before:aion-bg-base-300 after:aion-bg-base-300 aion-m-0 aion-p-0" />
                        }
                    </>
                )
            })}
        </Col>
    )
}