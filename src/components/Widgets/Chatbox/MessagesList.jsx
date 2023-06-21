import Message from './Message';
import { Col } from '../../Base/Grid';


export default function MessageList(props) {

    return (
        <Col ref={props.ref} className="items-start justify-start pt-6 pb-6 items-center overflow-y-scroll min-h-[300px]">
            {props?.messages.map((message, index) => (
                <Message
                    key={index}
                    author={message.author}
                    onSendMessage={props.onSendMessage}
                >
                    {message.text}
                </Message>
            ))}
        </Col >
    )
}