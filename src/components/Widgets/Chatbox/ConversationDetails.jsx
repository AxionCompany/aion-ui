import { Col, Row } from '../../Base/Grid/index.jsx';
import RenderMarkdown from '../../Base/RenderMarkdown.jsx';
import { onCleanup } from "solid-js";
export default function ConversationDetails(props) {
    const handleUpdateConversation = () => {
        const input = document.querySelector('#aionUi-descriptionInput').value;
        props.onUpdateConversation({description: input});
    }

    onCleanup(() => handleUpdateConversation())
    
    return (
        <Col className="prose px-4 py-12">
            <RenderMarkdown>
                {
                    `# ${props.conversation?.title || "Sem nome"} \n`
                    + '## Chatbot: \n'
                    + ` **${props.conversation?.bot?.name || "Não definido"}**  ${(props.conversation?.bot?.description)
                        ? (': ' + props.conversation?.bot?.description)
                        : ''
                    }\n`
                    + '### Descrição: \n'
                }
            </RenderMarkdown>
            <input 
                value={props.conversation?.description || "Sem descrição"}
                type="text"
                className="input w-full max-w-xs"
                id="aionUi-descriptionInput"
            />
        </Col>
    )
}