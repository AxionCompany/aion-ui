import Button from "../../Base/Button";
import TextArea from "../../Base/TextArea";
import { Row, Col } from "../../Base/Grid";

import { createSignal } from 'solid-js';


export default function InputMessage(props) {

    const [message, setMessage] = createSignal("");
    const [placeholder, setPlaceholder] = createSignal(props.placeholder);

    const handleSendMessage = (message, setDefault = false) => {
        if (message) {

            props.onSendMessage({
                author: "user",
                text: message
            });

            setMessage("");
            setPlaceholder("");
            setDefault && setPlaceholder(props.placeholder);

            // scroll to bottom animated
            props.messageListRef.scrollTo({
                top: props.messageListRef.scrollHeight,
                behavior: 'smooth'
            });

        }
    }

    return (
        <Row className="items-end justify-between shadow-default join bg-base-100">
            <TextArea
                onChange={(e) => setMessage(e.target.innerText)}
                placeholder={placeholder()}
                className="join-item"
                value={message()}
                onEnter={() => handleSendMessage(message())}
            />
            <Button
                onClick={() => handleSendMessage(message(), true)}
                className="join-item btn-ghost"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#969696" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
            </Button>
        </Row>
    )
}