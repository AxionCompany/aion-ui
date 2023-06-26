import Button from './Button.jsx';
import { Row } from './Grid/index.jsx';
export default function Modal(props) {
    return (
        <dialog id={props.id} className="aion-modal aion-modal-bottom aion-sm:modal-middle">
            <form method="dialog" className="aion-modal-box">
                <h3 className="font-bold text-lg">{props.title}</h3>
                <p className="aion-py-4">{props.content}</p>
                <Row className="aion-modal-action aion-justify-between">
                    <Button className="aion-btn-outline" onClick={props?.onCancel}>{props.closeLabel || "Fechar"}</Button>
                    <Button className="aion-btn-primary" onClick={props.onConfirm}>{props.confirmLabel || "Confirmar"}</Button>
                </Row>
            </form>
        </dialog>
    )
}