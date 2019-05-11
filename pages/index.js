import Layout from '../components/Layout';
import Fetch from 'isomorphic-unfetch';

import Prices from '../components/Prices';

const Index = (props) => (
    <Layout>
        <div>
            <h1>Hello this is Fuzzy-Potato</h1>
            <p>Current Bitcoin price</p>
            <Prices bpi={props.bpi} />
        </div>
    </Layout>
);

Index.getInitialProps = async () => {
    const res = await fetch
    ('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await res.json();

    return {
        bpi: data.bpi
    }
}

export default Index;