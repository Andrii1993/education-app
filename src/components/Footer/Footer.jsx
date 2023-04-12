import './styles.scss';

const Footer = () => {
    return (
        <div className='container'>
            <footer className='footer'>
                <div className='footer-media'>
                    <a href="https://www.facebook.com/"><img src="img/facebook.svg" alt="facebook" /></a>
                    <a href="https://www.instagram.com/"><img src="img/instagram.svg" alt="instagram" className='img'/></a>
                    <a href="https://www.gmail.com/"><img src="img/google-plus.svg" alt="google-plus" className='img'/></a>
                </div>
                <div className='copyright'>
                    <img src="img/copyright.svg" alt="copyright" />
                    <p className='footer_copy'>Copyright by Andrii Myroshnychenko</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;