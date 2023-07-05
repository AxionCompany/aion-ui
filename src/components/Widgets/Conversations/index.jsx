import ConversationList from "./ConversationList.jsx";
import Button from "../../Base/Button.jsx";
import { Col } from "../../Base/Grid/index.jsx";

export default function Conversations(props) {

    return (
        <Col className={`${!props.showConversations && 'hidden'} bg-base-100 text-base-content md:flex-col-reverse pb-8 md:pb-0 pt-8 justify-between md:justify-end w-full h-full px-3 max-w-[400px] shadow-md`}>
            <Col className="h-full mt-[-20px] md:mt-0 mb-2 md:flex-col-reverse md:justify-between overflow-hidden">
                <span className="text-xs md:text-xs text-right md:text-center">Powered by <a className="underline text-primary" href="https://ai-on.co">ai-on.co</a></span>
                <ConversationList {...props} />
            </Col>
            <Col className="md:flex-col-reverse">
                <div className="divider before:bg-neutral-content after:bg-neutral-content"></div>
                <Button
                    onClick={props.onCreateConversation}
                    className="btn-primary shadow-md"
                >
                    {props.createConversationLabel || 'Nova Conversa'}
                </Button>
            </Col>
        </Col>
    )
}
