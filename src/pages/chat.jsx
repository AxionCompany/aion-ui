import Chat from '../components/Features/Chat';
import Layout from '../layout';


export default function (props) {
    return (
        <Layout type="public">
            <Chat {...props}/>
        </Layout>
    )
};
