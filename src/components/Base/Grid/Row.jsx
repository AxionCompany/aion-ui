export default function Row(props) {
    return (
        <div
            {...props}
            className={`w-full flex flex-row flex-nowrap ${props.className}`}
        >
            {props.children}
        </div>

    )
};