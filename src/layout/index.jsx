import { Col, Row } from '../components/Base/Grid';

export default function (props) {
    return (
        <Col className="h-screen bg-neutral-100">
            {props.children}
        </Col>
    )
}