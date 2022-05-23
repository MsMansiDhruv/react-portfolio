import './index.scss';
import LogoTitle from '../../assets/images/logo-s.png';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone"></div>
            <h1>
                Hi, <br/> I am
                <img src={LogoTitle} alt="developer" />
                Dhruv<br/>
                full stack data engineer </h1>
        </div>
    );
}

export default Home