export default function Card(props) {
    return (
        <div className={`card bg-base-100 shadow-default ${props?.className}`}>
            <div className={`card-body py-4`}>
                {props.children}
            </div>
        </div>
    )
}