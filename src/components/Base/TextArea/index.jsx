import { createEffect, createSignal, onCleanup } from 'solid-js';
import './index.css';

export default function TextArea(props) {

    const [isFocused, setIsFocused] = createSignal(false);

    let inputRef;

    const handleChange = (e) => {
        props.onChange(e)
    }

    const onEnter = (e) => {
        if (e.key === 'Enter' && !e.shiftKey && props.onEnter) {
            props.onEnter();
            e.preventDefault();
            inputRef.innerHTML = "";
        }
    }

    document.addEventListener('keydown', onEnter);
    onCleanup(() => document.removeEventListener('keydown', onEnter));


    return (
        <div
            ref={inputRef}
            onFocus={() => { setIsFocused(true); inputRef.focus() }}
            onClick={() => { setIsFocused(true); inputRef.focus() }}
            className={`aion-w-full aion-overflow-y-scroll aion-py-3 aion-px-6 aion-max-h-[200px] ${props.className} ${(!props.value) ? 'aion-text-gray-400' : 'aion-text-base-content'}`}
            contenteditable={true}
            onInput={handleChange}
            onFocusOut={() => { setIsFocused(false) }}
        >
            {(!isFocused() && !props.value) ? props.placeholder : ''}
        </div>
    )
}