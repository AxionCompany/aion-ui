import Button from './Button';
import { Row } from './Grid';
export default function Modal(props) {
    return (
        <dialog id={props.id} className="modal modal-bottom sm:modal-middle">
            <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">{props.title}</h3>
                <p className="py-4">{props.content}</p>
                <Row className="modal-action justify-between">
                    <Button className="btn-outline" onClick={props?.onCancel}>{props.closeLabel || "Fechar"}</Button>
                    <Button className="btn-primary" onClick={props.onConfirm}>{props.confirmLabel || "Confirmar"}</Button>
                </Row>
            </form>
        </dialog>
    )
}