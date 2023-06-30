import Message from './Message/index.jsx';
import { Col } from '../../Base/Grid/index.jsx';


export default function MessageList(props) {

    return (
        <Col ref={props.ref} className="justify-start pt-2 pb-6 items-center overflow-y-scroll min-h-[300px]">
            {props?.messages?.map((message, index) => (
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