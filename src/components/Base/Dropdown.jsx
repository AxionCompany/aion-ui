
export default function Dropdown(props) {

    return (
        <div class="dropdown dropdown-bottom dropdown-end z-40">
            {props.children}
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                {props?.options?.map((option, index) => (
                    <li onClick={()=>props.onSelect(option)} key={index}>
                        <span>{option[props.attr || "name"]}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}