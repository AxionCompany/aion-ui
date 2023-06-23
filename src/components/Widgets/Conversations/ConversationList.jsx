import { Col } from "../../Base/Grid";
import ConversationCard from "./ConversationCard";

export default function ConversationList(props) {

    return (
        <Col className="overflow-y-scroll px-6">
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
                            <div className="divider m-0 p-0" />
                        }
                    </>
                )
            })}
        </Col>
    )
}