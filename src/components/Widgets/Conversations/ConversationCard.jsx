import { Col, Row } from "../../Base/Grid/index.jsx";

const defaultProps = {
    title: "Title",
    description: "Description...",
    bot: "Bot",
    className: ""
}

export default function ConversationCard(props) {    
    return (
        <Row
            onClick={props.onClick}
            className={`py-2 h-16 cursor-pointer ${defaultProps.className} ${props.selected && 'border-l-4 border-primary pl-3'}`}
        >
            <Col className="h-full">
                <span className="font-bold truncate">{props.title || defaultProps.title}</span>
                <Row className="gap-2 items-center">
                    <span className="font-semibold text-xs truncate min-w-fit">{props?.bot || defaultProps?.bot}</span>
                    <span className="text-sm truncate">{props.description || defaultProps.description}</span>
                </Row>
            </Col>
            <div className="flex h-full items-center justify-end ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D9D9D9" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
        </Row>
    )
}
