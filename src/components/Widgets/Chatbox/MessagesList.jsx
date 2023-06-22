import Message from './Message';
import { Col } from '../../Base/Grid';
import Actions from './Actions';

export default function MessageList(props) {

    return (
        <Col ref={props.ref} className="justify-start pt-6 pb-6 items-center overflow-y-scroll min-h-[300px]">
            {props?.messages.map((message, index) => (
                <Message
                    key={index}
                    author={message.author}
                    onSendMessage={props.onSendMessage}
                >
                    {message.text}
                </Message>
            ))}
            {(props.messages.length > 0 && props.onRegenerate) &&
                <Actions onRegenerate={props.onRegenerate} />
            }
        </Col >
    )
}