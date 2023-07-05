import Chat from '../components/Features/Chat/index.jsx';
import Layout from '../layout/index.jsx';


export default function (props) {
    return (
        <Layout type="public">
            <Chat {...props}/>
        </Layout>
    )
};
