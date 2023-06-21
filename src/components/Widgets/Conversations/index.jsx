import ConversationList from "./ConversationList";
import Button from "../../Base/Button";
import { Col } from "../../Base/Grid";

export default function Conversations(props) {

    return (
        <Col className={`${props.showConversations ? 'flex': 'hidden'} md:flex-col-reverse pb-8 md:pb-0 pt-0 md:pt-8 justify-between md:justify-end w-full px-3 max-w-[400px] border-r-2 border-white`}>
            <ConversationList {...props} />
            <Col className="md:flex-col-reverse">
                <div className="divider"></div>
                <Button
                    onClick={props.onCreateConversation}
                    className="btn-outline btn-primary shadow-md"
                >
                    Nova Conversa
                </Button>
            </Col>
        </Col>
    )
}
