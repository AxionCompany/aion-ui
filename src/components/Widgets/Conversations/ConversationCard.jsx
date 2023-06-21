import { Col } from "../../Base/Grid";
import Card from "../../Base/Card";

const defaultProps = {
    title: "Título",
    descriptioin: "Descrição da conversa",
    className: ""
}

export default function ConversationCard(props) {
    return (
        <Col
            onClick={props.onClick}
            className={`py-2 cursor-pointer ${defaultProps.className}`}
        >
            <Card className={`hover:shadow-md h-[100px] ${props.selected ? 'shadow-md border-l-8 border-primary' : ''}`}>
                <span className="font-bold truncate">{props.title || defaultProps.title}</span>
                <span className="truncate">{props.description || defaultProps.descriptioin}</span>
            </Card>
        </Col>
    )
}
