import { Col } from "../../../Base/Grid";
import Card from "../../../Base/Card";

const defaultProps = {
    title: "Nome",
    descriptioin: "Descrição do Bot",
    className: ""
}

export default function BotCard(props) {
    return (
        <Col
            onClick={props.onClick}
            className={`py-2 cursor-pointer ${defaultProps.className}`}
        >
            <Card className={`hover:shadow-md h-[100px] ${props.selected ? 'shadow-md border-l-8 border-neutral-400' : ''}`}>
                <span className="font-bold truncate inline">{props.title || defaultProps.title}</span>
                <span className="truncate">{props.description || defaultProps.descriptioin}</span>
            </Card>
        </Col>
    )
}
