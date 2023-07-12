import ConversationList from "./ConversationList.jsx";
import Button from "../../Base/Button.jsx";
import { Col } from "../../Base/Grid/index.jsx";

export default function Conversations(props) {

    return (
        <Col
            className={`${!props.showConversations && 'hidden'} bg-base-100 text-base-content md:flex-col-reverse pb-8 md:pb-0 pt-8 justify-between md:justify-end w-full h-full px-3 shadow-md`}
            style={{ maxWidth: !props.isMobile ? (props.conversationMaxWidth || '300px') : '100%' }}
        >

            <Col className="h-full mt-[-20px] md:mt-0 mb-2 md:flex-col-reverse md:justify-between overflow-hidden">
                {props?.poweredBy &&
                    <span className="text-xs md:text-xs text-right md:text-center"> {props?.poweredBy?.label}<a className="underline text-primary" href={props?.poweredBy?.url}>{props.poweredBy?.value}</a></span>
                }
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
