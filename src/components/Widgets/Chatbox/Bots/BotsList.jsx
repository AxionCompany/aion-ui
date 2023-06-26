import { createEffect } from "solid-js";
import BotCard from "./BotCard.jsx";
import { Col } from "../../../Base/Grid/index.jsx";

export default function BotsList(props) {

    createEffect(() => {
        if (
            (props?.messages?.length > 0 && props.selectedBot === null)
            || (props?.messages?.length === 0 && props.bots.length === 1)
        ) {
            props?.setSelectedBot(0);
        }
    })

    return (
        <Col className="aion-w-full aion-overflow-y-scroll aion-px-6 aion-items-center aion-justify-center aion-pt-12">
            {props?.bots?.map((bot, index) => (
                <BotCard
                    key={index}
                    title={bot.name}
                    description={bot.description}
                    onClick={() => props.onSelectBot(props.bots[index])}
                />
            ))}
        </Col>
    )
}