import { Col, Row } from "../../Base/Grid/index.jsx";
import RenderMarkdown from "../../Base/RenderMarkdown.jsx";
import { onCleanup } from "solid-js";

const _markdown = (props) =>
  `# ${props.conversation?.title || "No Title"} \n` +
  ` **${props.conversation?.bot?.name || "Not Defined"}**  ${
    (props.conversation?.bot?.description)
      ? (": " + props.conversation?.bot?.description)
      : ""
  }\n` +
  (props?.conversation?.bot?.id ? `id: ${props.conversation?.bot?.id} \n` : "");

export default function ConversationDetails({ markdown, ...props }) {
  const handleUpdateConversation = () => {
    const input = document.querySelector("#aionUi-descriptionInput").value;
    props.onUpdateConversation({ description: input });
  };

  onCleanup(() => handleUpdateConversation());

  return (
    <Col className="prose px-4 py-12">
      <RenderMarkdown>
        {markdown ? markdown(props) : _markdown(props)}
      </RenderMarkdown>
      <label className="label">
        <span className="label-text">
          {props.conversationDescriptionLabel ||
            "Short Conversation Description"}
        </span>
      </label>
      <input
        value={props.conversation?.description || "No Description"}
        type="text"
        className="input w-full max-w-xs"
        id="aionUi-descriptionInput"
      />
    </Col>
  );
}
