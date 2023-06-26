import Button from "../../Base/Button.jsx";
import TextArea from "../../Base/TextArea/index.jsx";
import { Row, Col } from "../../Base/Grid/index.jsx";

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

            // // scroll to bottom animated
            // props.messageListRef.scrollTo({
            //     top: props.messageListRef.scrollHeight,
            //     behavior: 'smooth'
            // });

        }
    }

    return (
        <Row className="aion-items-end aion-justify-between aion-shadow-default aion-join aion-bg-base-100 aion-text-base-content">
            <TextArea
                onChange={(e) => setMessage(e.target.innerText)}
                placeholder={placeholder()}
                className="aion-join-item"
                value={message()}
                onEnter={() => handleSendMessage(message())}
            />
            <Button
                onClick={() => handleSendMessage(message(), true)}
                className="aion-join-item aion-btn-ghost hover:aion-bg-primary"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#969696" class="aion-w-6 aion-h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
            </Button>
        </Row>
    )
}