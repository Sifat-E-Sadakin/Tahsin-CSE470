import  { useContext } from 'react';
import { userInfo } from '../UserContext/UserContext';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

    let {user, logOut}= useContext(userInfo);

    let loggingOut = ()=>{

        logOut();


    }
    return (
        <div className='header  '>
        <div>
            {/* <img src={logo} alt="" /> */}
        </div>
        <div className='anchors'>
            <ActiveLink to="/home">Home</ActiveLink>
            <ActiveLink to="/fab">Favorite</ActiveLink>
            <ActiveLink to="/inventory">Inventory</ActiveLink>
           {user?  <></>: <ActiveLink to="/login">Login</ActiveLink>}
           {user?  <></>: <ActiveLink to="/singUp">Sing Up</ActiveLink>}
            {user && <><ActiveLink>{user.email}</ActiveLink> <Link onClick={loggingOut}>Logout</Link></> }
        </div>
        
    </div>
    );
};

export default Navbar;