import { Col, Row } from "../../Base/Grid/index.jsx";
import ConversationCard from "./ConversationCard.jsx";
import RenderMarkdown from "../../Base/RenderMarkdown.jsx";

export default function ConversationList(props) {

    return (
        <Col className="overflow-y-scroll md:px-6 overflow-x-hidden">

            {props.isLoading
                ? (
                    <Col>
                        <RenderMarkdown className="prose text-md font-extrabold text-base-content opacity-30">{props?.loadingState?.title}</RenderMarkdown>
                        <RenderMarkdown className="prose text-xs font-extrabold text-base-content opacity-30">{props?.loadingState?.description}</RenderMarkdown>
                    </Col>
                )
                : Object.keys(props?.conversations).length === 0
                    ? (
                        <Col>
                            <RenderMarkdown className="prose text-md font-extrabold text-base-content opacity-30">{props?.emptyState.title}</RenderMarkdown>
                            <RenderMarkdown className="prose text-xs font-extrabold text-base-content opacity-30">{props?.emptyState.description}</RenderMarkdown>
                        </Col>
                    )
                    : Object.keys(props?.conversations)
                        .map((key, index) => (
                            <>
                                {props.conversations[key].length > 0 &&
                                    (
                                        <span className={`text-sm font-extrabold text-base-content opacity-30 ${index > 0 ? 'mt-2' : ''}`}>
                                            {key === 'todayConversations' && 'Today'}
                                            {key === 'weekConversations' && 'This Week'}
                                            {key === 'oldConversations' && 'Older'}
                                        </span>
                                    )
                                }
                                {props.conversations[key].map((conversation, i) => {
                                    return (
                                        <>
                                            <ConversationCard
                                                key={index}
                                                title={conversation.title}
                                                bot={conversation?.bot?.name}
                                                description={conversation.description}
                                                selected={props.selectedConversation === conversation.index}
                                                onClick={() => props.onSelectConversation(conversation.index)}
                                            />
                                            {(i + 1) < props.conversations[key].length &&
                                                <div className="divider before:bg-base-300 after:bg-base-300 m-0 p-0" />
                                            }
                                        </>
                                    )
                                })}
                            </>
                        ))
            }
        </Col >
    )
}