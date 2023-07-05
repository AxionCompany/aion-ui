
import BotMessage from './BotMessage.jsx';
import UserMessage from './UserMessage.jsx';
import RenderMarkdown from '../../../Base/RenderMarkdown.jsx';
import { Row } from '../../../Base/Grid/index.jsx';

export default function Message(props) {

    return (
        <Row className="py-4 items-center justify-center max-w-[95%]">
            {props.author === "user"
                ? (
                    <UserMessage color="gray">
                        <RenderMarkdown className="prose text-base-content">
                            {props.children}
                        </RenderMarkdown>
                    </UserMessage>
                )
                : (

                    <BotMessage color="black">
                        <RenderMarkdown  className="prose">
                            {props.children}
                        </RenderMarkdown>
                    </BotMessage>
                )
            }
        </Row>
    )
}