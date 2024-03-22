import { List } from '../../components';
import { users } from '../../data';


const Home = () => {
    return (
        <div>
        <h1>Home</h1>
        <List itens={users} />
    </div>
       
    );
}
export default Home;