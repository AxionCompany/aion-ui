import RenderHtml from "./RenderHtml.jsx";
import showdown  from 'showdown';

const converter = new showdown.Converter({tables: true, simpleLineBreaks:true})

export default function RenderMarkdown(props){
    return (
    <RenderHtml {...props}>
        {converter.makeHtml(props.children)}
    </RenderHtml>
    )
}