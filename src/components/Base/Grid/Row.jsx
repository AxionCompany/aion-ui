export default function Row(props) {
    return (
        <div
            {...props}
            className={`aion-w-full aion-flex aion-flex-row aion-flex-nowrap ${props.className}`}>
            {props.children}
        </div>

    )
};