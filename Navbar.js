import React, { useState , useContext}from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import './Navbar.css';

import { AuthContext } from '../context/AuthContext';


const Navbar = () => {

        const [click, setClick] = useState(false);
    
        const handleClick = () => setClick(!click);
        const closeMobileMenu = () => setClick(false);
        const { user, logout } = useContext(AuthContext);
        const navigate = useNavigate();
    
        const handleLogout = () => {
            logout();
            navigate('/');
        };
    return (
<nav className="navbar">
<div className="navbar-container">
    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        Travel Blog
    </Link>
    <div className="menu-icon" onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
    </div>
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
    {user ? (
                    <>
                        <li>
                            <div className="user-icon" onClick={() => navigate('/admin')}>
                                <img src="/resim/user.jpg" alt="User Icon" className="user-avatar" />
                                
                                <span>{user.username}</span>
                                
                            </div>
                        </li>
                        <li><button onClick={handleLogout} className="btn">Logout</button></li>
                    </>
                ) : (
        <> <li className="nav-item">
           
            <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
                Login
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/register" className="nav-links" onClick={closeMobileMenu}>
                Register
            </Link>
        </li>
       </> )}
        {/* <li className="nav-item">
            <Link to="/post" className="nav-links" onClick={closeMobileMenu}>
                Add Post
            </Link>
        </li> */}
        <li className="nav-item">
            <Link to="/countries" className="nav-links" onClick={closeMobileMenu}>
                Countries
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/logout" className="nav-links" onClick={closeMobileMenu}>
                Logout
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/favorites" className="nav-links" onClick={closeMobileMenu}>
                Favorites
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/admin" className="nav-links" onClick={closeMobileMenu}>
                Admin Panel
            </Link>   
        </li>
    </ul>
</div>
</nav>
);
};

export default Navbar;