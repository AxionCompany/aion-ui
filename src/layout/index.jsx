import { Col } from '../components/Base/Grid/index.jsx';

export default function (props) {
    return (
        <Col className="h-full bg-base-200 overflow-auto">
            {props.children}
        </Col>
    )
}