function Button(props) {

    return (
        <button
            {...props}
            className={`aion-btn ${props.className}`}
        >
            {props.children}
        </button>
    )
}

export default Button;