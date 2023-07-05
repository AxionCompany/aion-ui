import { Row, Col } from '../../../Base/Grid/index.jsx';

export default function BotMessage(props) {
    return (
        <Row className="px-8 justify-start">
            <Col className="max-w-[40px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path stroke={props.color || "#6FBF62"} fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2ZM9 9h6v6H9V9Z" />
                </svg>
            </Col>
            <Col className="items-center">
                {props.children}
            </Col>
        </Row>
    )
}