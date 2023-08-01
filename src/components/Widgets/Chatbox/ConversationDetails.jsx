import { Col, Row } from '../../Base/Grid/index.jsx';
import RenderMarkdown from '../../Base/RenderMarkdown.jsx';
import { onCleanup } from 'solid-js';

export default function ConversationDetails(props) {

    const handleUpdateConversation = () => {
        const input = document.querySelector('#aionUi-descriptionInput').value;
        props.onUpdateConversation({ description: input });
    }

    onCleanup(() => handleUpdateConversation())

    return (
        <Col className="prose px-4 py-12">
            <RenderMarkdown>
                {
                    `# ${props.conversation?.title || "No Title"} \n`
                    + '## Chatbot: \n'
                    + ` **${props.conversation?.bot?.name || "Not Defined"}**  ${(props.conversation?.bot?.description)
                        ? (': ' + props.conversation?.bot?.description)
                        : ''
                    }\n`
                }
            </RenderMarkdown>
            <label className="label">
                <span className="label-text">{props.conversationDescriptionLabel || "Short Conversation Description"}</span>
            </label>
            <input
                value={props.conversation?.description || "No Description"}
                type="text"
                className="input w-full max-w-xs"
                id="aionUi-descriptionInput"
            />
        </Col>
    )
}