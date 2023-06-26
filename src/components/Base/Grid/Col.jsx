export default function Col(props) {
    return (
        <div 
        {...props}
        className={`aion-flex aion-flex-col aion-w-full ${props.className}`}
        >
            {props.children}
        </div>
    )
}
