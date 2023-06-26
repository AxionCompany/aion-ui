
import BotMessage from './BotMessage.jsx';
import UserMessage from './UserMessage.jsx';
import RenderMarkdown from '../../../Base/RenderMarkdown.jsx';
import { Row } from '../../../Base/Grid/index.jsx';

export default function Message(props) {

    return (
        <Row className="aion-py-4 aion-items-center aion-justify-center aion-max-w-[95%]">
            {props.author === "user"
                ? (
                    <UserMessage color="gray">
                        <RenderMarkdown className="aion-prose aion-text-base-content">
                            {props.children}
                        </RenderMarkdown>
                    </UserMessage>
                )
                : (

                    <BotMessage color="black">
                        <RenderMarkdown  className="aion-prose">
                            {props.children}
                        </RenderMarkdown>
                    </BotMessage>
                )
            }
        </Row>
    )
}