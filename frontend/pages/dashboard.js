import Search from "../components/search"
import axios from 'axios';
import GlobalContext from "./globalcontext";
import CardContainer from "../components/CardContainer"

axios.defaults.baseURL = "http://localhost:4000/api/v1/"


export async function getStaticProps() {
    const res = await axios.get('/medication');
    let data = res.data;

    return {
        props: {
            medicine: data
        }
    };
}

const dashboard = (medicine) => {
    return (
        <div>
            <Search></Search>
            <GlobalContext.Provider value={medicine}>
                <CardContainer></CardContainer>
            </GlobalContext.Provider>
        </div>
    )
}

export default dashboard