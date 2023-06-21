import { Col, Row } from '../../Base/Grid';
import Button from '../../Base/Button';
import Dropdown from '../../Base/Dropdown';
import Modal from '../../Base/Modal';

export default function Configuration(props) {

    const filterConfig = (config) => {
        return config?.filter(item => props.showConversations
            ? item.id !== "show_conversations"
            : item.id !== "hide_conversations"
        )
    }

    const handleSelect = (option) => {
        props.onSelectConfig(option)
    }

    return (
        <Row className="items-center justify-between my-2 px-2">
            {/* back button */}
            {props.showDetails
                ? <div className="mr-2">
                    <Button className="bg-primary-500 btn-circle btn-sm" onClick={() => handleSelect({ id: 'conversation_details' })}>
                        <svg className="w-4 h-4 text-grey" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M10.7071 4.29289C11.0976 4.68342 11.0976 5.31658 10.7071 5.70711L6.41421 10L10.7071 14.2929C11.0976 14.6834 11.0976 15.3166 10.7071 15.7071C10.3166 16.0976 9.68342 16.0976 9.29289 15.7071L4.29289 10.7071C3.90237 10.3166 3.90237 9.68342 4.29289 9.29289L9.29289 4.29289C9.68342 3.90237 10.3166 3.90237 10.7071 4.29289Z"
                            />
                        </svg>
                    </Button>
                </div>
                : <div></div>
            }
            <Modal
                id="delete_conversation"
                title="Deletar Conversa"
                content="Você tem certeza que deseja deletar essa conversa? Essa ação não pode ser desfeita."
                onCancel={() => console.log("cancelado")}
                onConfirm={props.onDeleteConversation}
            />
            <Dropdown
                attr={"name"}
                options={filterConfig(props.availableConfig)}
                onSelect={handleSelect}
            >
                <Button className="bg-primary-500 btn-circle btn-sm">...</Button>
            </Dropdown>
        </Row>
    )
}