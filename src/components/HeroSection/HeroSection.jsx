import './styles.scss';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="hero">
            <div className='container  container_hero'>
                <div className='hero_container'>
                    <h2 className='hero_title'>Ласкаво просимо на EduSite</h2>
                    <p className='hero_text'>Ми - креативна молода команда, яка працює та втілює найновітніші 
                    та найцікавіші освітні методики. 
                    Обирайте те, що вам подобається.
                    Відкривайте для себе нові можливості.
                    </p>
                    <Link to='/courses' ><button className='btn'>Ознайомитись</button></Link>
                </div>
                <div>
                    <img src="img/pre-scene 9.svg" alt="banner" className='img_banner'/>
                </div>
                
            </div>
        </div>
    )
}

export default HeroSection