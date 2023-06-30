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
            className={`w-full overflow-y-scroll py-3 px-6 max-h-[200px] ${props.className} ${(!props.value) ? 'text-gray-400' : 'text-base-content'}`}
            contenteditable={true}
            onInput={handleChange}
            onFocusOut={() => { setIsFocused(false); setTimeout(() => {
                // Manually scroll the window by 1px.
                window.scrollTo(0, window.scrollY + 1);
                
                // Immediately scroll back.
                window.scrollTo(0, window.scrollY - 1);
            }, 0); }}
        >
            {(!isFocused() && !props.value) ? props.placeholder : ''}
        </div>
    )
}