import { Row } from '../../Base/Grid/index.jsx';
import Button from '../../Base/Button.jsx';
import Dropdown from '../../Base/Dropdown.jsx';
import Modal from '../../Base/Modal.jsx';

export default function Header(props) {

    const handleSelect = (option) => {
        props.onSelectConfig(option)
    }

    return (
        <Row className="items-center justify-between py-2 px-4 bg-base-100 shadow-sm">
            <div className="mr-2">
                {props.showDetails
                    ? (
                        <Button className="btn-ghost btn-circle btn-sm" onClick={() => handleSelect({ id: 'conversation_details' })}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </Button>
                    )
                    : (props.allowConversations &&
                        (
                            props.showConversations
                                ? (
                                    <Button className="btn-ghost btn-circle btn-sm" onClick={() => handleSelect({ id: 'toggle_conversations' })}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                        </svg>
                                    </Button>
                                )
                                : (
                                    <Button className="btn-ghost btn-circle btn-sm" onClick={() => handleSelect({ id: 'toggle_conversations' })}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                        </svg>
                                    </Button>
                                )
                        )
                    )
                }
            </div>
            <Modal
                id="delete_conversation"
                title="Deletar Conversa"
                content="Você tem certeza que deseja deletar essa conversa? Essa ação não pode ser desfeita."
                onCancel={() => console.log("cancelado")}
                onConfirm={props.onDeleteConversation}
            />
            <Dropdown
                attr={"name"}
                options={props.availableConfig}
                onSelect={handleSelect}
            >
                <label tabindex="0" className="btn btn-ghost btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </label>
            </Dropdown>
        </Row>
    )
}