export default function Col(props) {
    return (
        <div 
        {...props}
        className={`flex flex-col w-full ${props.className}`}
        >
            {props.children}
        </div>
    )
}
