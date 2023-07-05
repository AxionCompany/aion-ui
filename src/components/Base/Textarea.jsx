export default function TextArea(props) {

    return (
        <div className="form-control">
        <label className="label">
          <span className="label-text">Your bio</span>
        </label>
        <textarea className="textarea textarea-bordered h-24" placeholder={props.placeholder}></textarea>
      </div>
    )
}

