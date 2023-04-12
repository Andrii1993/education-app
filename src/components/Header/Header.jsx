// import './styles.scss';
// import { Link } from 'react-router-dom';

// const Header = () => {
//     return (
//         <div className='container container_nav'>
//             <div className='header_container header_nav'>
//                     <li><Link to='/' className='header_list list'>Home</Link></li>
//                     <li><Link to='/' className='header_list list'>Courses</Link></li>
//                     <li><Link to='/' className='header_list list'>About Us</Link></li>
//                     <li><Link to='/' className='header_list'>Contact Us</Link></li>
//             </div>
//         </div>
//     )
// }

// export default Header;

import React, { useState } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='container container_nav'>
            <div className='header_container header_nav'>
                <div className='header_burger' onClick={handleMenuToggle}>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
                <ul className={`header_list ${isMenuOpen ? 'is-open' : ''}`}>
                    <li><Link to='/' className='list'>Home</Link></li>
                    <li><Link to='/courses' className='list item'>Courses</Link></li>
                    <li><Link to='/about' className='list item'>About Us</Link></li>
                    <li><Link to='/contact' className='list item'>Contact Us</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
