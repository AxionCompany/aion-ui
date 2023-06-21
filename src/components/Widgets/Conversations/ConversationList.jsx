import { Col } from "../../Base/Grid";
import ConversationCard from "./ConversationCard";

export default function ConversationList(props) {

    return (
        <Col className="overflow-y-scroll px-6">
            {props?.conversations?.map((conversation, index) => (
                <ConversationCard
                    key={index}
                    title={conversation.name}
                    description={conversation.description}
                    selected={index === props.selectedConversation}
                    onClick={() => props.onSelectConversation(index)}
                />
            ))}
        </Col>
    )
}