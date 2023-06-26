import { Col, Row } from "../../Base/Grid/index.jsx";

const defaultProps = {
    title: "Título",
    description: "Descrição da conversa",
    bot: "Bot",
    className: ""
}

export default function ConversationCard(props) {    
    return (
        <Row
            onClick={props.onClick}
            className={`aion-py-2 aion-h-16 aion-cursor-pointer ${defaultProps.className} ${props.selected && 'aion-border-l-4 aion-border-primary aion-pl-3'}`}
        >
            <Col className="aion-h-full">
                <span className="aion-font-bold aion-truncate">{props.title || defaultProps.title}</span>
                <Row className="aion-gap-2 aion-items-center">
                    <span className="aion-font-semibold aion-text-xs aion-truncate aion-min-w-fit">{props.bot || defaultProps.bot}</span>
                    <span className="aion-text-sm aion-truncate">{props.description || defaultProps.description}</span>
                </Row>
            </Col>
            <div className="aion-flex aion-h-full aion-items-center aion-justify-end ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D9D9D9" class="aion-bi aion-bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
        </Row>
    )
}
