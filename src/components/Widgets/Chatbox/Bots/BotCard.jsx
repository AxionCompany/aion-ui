import { Col } from "../../../Base/Grid/index.jsx";
import Card from "../../../Base/Card.jsx";

const defaultProps = {
    title: "Nome",
    descriptioin: "Descrição do Bot",
    className: ""
}

export default function BotCard(props) {
    return (
        <Col
            onClick={props.onClick}
            className={`aion-py-2 aion-cursor-pointer ${defaultProps.className} aion-max-w-sm`}
        >
            <Card className={`aion-hover:shadow-md aion-h-[100px] ${props.selected ? 'aion-shadow-md aion-border-l-8 aion-border-neutral-400' : ''}`}>
                <span className="aion-font-bold aion-truncate aion-inline">{props.title || defaultProps.title}</span>
                <span className="aion-truncate">{props.description || defaultProps.descriptioin}</span>
            </Card>
        </Col>
    )
}
