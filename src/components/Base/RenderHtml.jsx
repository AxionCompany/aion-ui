import { createEffect } from 'solid-js';

export default function RenderHtml(props) {
    let div;

    createEffect(() => {
        div.innerHTML = props.children
    });

    return (
        <div className={`aion-w-full ${props.className}`} ref={div} ></div>
    )
}