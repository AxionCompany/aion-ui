function Button(props) {

    return (
        <button
            {...props}
            className={`btn ${props.className}`}
        >
            {props.children}
        </button>
    )
}

export default Button;