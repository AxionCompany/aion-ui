import { Col, Row } from '../components/Base/Grid/index.jsx';

export default function (props) {
    return (
        <Col id="aion" className="aion-h-screen aion-bg-base-200">
            {props.children}
        </Col>
    )
}