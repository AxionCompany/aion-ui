export default function TextArea(props) {

    return (
        <div className="aion-form-control">
        <label className="aion-label">
          <span className="aion-label-text">Your bio</span>
        </label>
        <textarea className="aion-textarea aion-textarea-bordered aion-h-24" placeholder={props.placeholder}></textarea>
      </div>
    )
}

