import ConversationList from "./ConversationList.jsx";
import Button from "../../Base/Button.jsx";
import { Col } from "../../Base/Grid/index.jsx";

export default function Conversations(props) {

    return (
        <Col className={`${!props.showConversations && 'aion-hidden'} aion-bg-base-100 aion-text-base-content md:aion-flex-col-reverse aion-pb-8 md:aion-pb-0 aion-pt-8 aion-justify-between md:aion-justify-end aion-w-full aion-h-screen aion-px-3 aion-max-w-[400px] aion-shadow-md`}>
            <Col className="aion-mt-[-20px] md:aion-mt-0 aion-mb-2 md:aion-flex-col-reverse md:aion-justify-between aion-h-full">
                <span className="aion-text-xs md:aion-text-xs aion-text-right md:aion-text-center">Powered by <a className="aion-underline aion-text-primary" href="https://ai-on.co">ai-on.co</a></span>
                <ConversationList {...props} />
            </Col>
            <Col className="md:aion-flex-col-reverse">
                <div className="aion-divider before:aion-bg-neutral-content after:aion-bg-neutral-content"></div>
                <Button
                    onClick={props.onCreateConversation}
                    className="aion-btn-primary aion-shadow-md"
                >
                    {props.createConversationLabel || 'Nova Conversa'}
                </Button>
            </Col>
        </Col>
    )
}
