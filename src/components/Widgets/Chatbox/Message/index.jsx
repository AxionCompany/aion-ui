
import BotMessage from './BotMessage';
import UserMessage from './UserMessage';
import RenderMarkdown from '../../../Base/RenderMarkdown';
import { Row } from '../../../Base/Grid';

export default function Message(props) {

    return (
        <Row className="py-4 items-center justify-center max-w-[95%]">
            {props.author === "user"
                ? (
                    <UserMessage color="gray">
                        <RenderMarkdown className="prose">
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