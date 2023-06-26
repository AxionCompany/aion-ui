export default function Card(props) {
    return (
        <div className={`aion-card aion-bg-base-100 aion-text-base-content aion-shadow-default ${props?.className}`}>
            <div className={`aion-card-body aion-py-4`}>
                {props.children}
            </div>
        </div>
    )
}