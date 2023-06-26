import { Col, Row } from '../../Base/Grid/index.jsx';
import RenderMarkdown from '../../Base/RenderMarkdown.jsx';

export default function ConversationDetails(props) {

    return (
        <Col className="aion-prose aion-px-4 aion-py-12">
            <RenderMarkdown>
                {
                    `# ${props.conversation?.title || "Sem nome"} \n`
                    + '## Chatbot: \n'
                    + ` **${props.conversation?.bot?.name || "Não definido"}**  ${(props.conversation?.bot?.description)
                        ? (': ' + props.conversation?.bot?.description)
                        : ''
                    }\n`
                    + '### Descrição: \n'
                    + `${props.conversation?.description || "Sem descrição"}`
                }
            </RenderMarkdown>
        </Col>
    )
}