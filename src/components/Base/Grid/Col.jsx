export default function Col(props) {

    return (
        <div
            {...props}
            style={props?.style?.maxWidth ? `max-width:${props?.style?.maxWidth};` : ''}
            className={`flex flex-col w-full ${props.className}`}
        >
            {props.children}
        </div>
    )
}
