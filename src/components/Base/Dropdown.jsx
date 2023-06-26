
export default function Dropdown(props) {

    return (
        <div class="aion-dropdown aion-dropdown-bottom aion-dropdown-end aion-z-40">
            {props.children}
            <ul tabindex="0" class="aion-dropdown-content aion-menu aion-p-2 aion-shadow aion-bg-base-100 aion-rounded-box aion-w-52">
                {props?.options?.map((option, index) => (
                    <li onClick={()=>props.onSelect(option)} key={index}>
                        <span>{option[props.attr || "name"]}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}