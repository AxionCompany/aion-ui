export default function TextArea(props) {

    return (
        <div className="form-control">
        <label className="label">
          <span className="label-text">{props.conversationDescriptionLabel || "Description"}</span>
        </label>
        <textarea className="textarea textarea-bordered h-24" placeholder={props.placeholder || "Type your short description for this conversation"}></textarea>
      </div>
    )
}

