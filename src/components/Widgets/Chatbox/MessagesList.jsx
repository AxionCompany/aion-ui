import Message from './Message/index.jsx';
import { Col } from '../../Base/Grid/index.jsx';


export default function MessageList(props) {

    return (
        <Col ref={props.ref} className="aion-justify-start aion-pt-2 aion-pb-6 aion-items-center aion-overflow-y-scroll aion-min-h-[300px]">
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