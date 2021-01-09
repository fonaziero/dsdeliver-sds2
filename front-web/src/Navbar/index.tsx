import { ReactComponent as Logo } from './logo.svg';
import { Link } from 'react-router-dom';
import './styles.css';

function Navbar() {
    return(
    <nav className="main-navbar">
        <Logo/>
        <Link className="logo-text " to="/">DS Delivered</Link>
    </nav>
    )
}

export default Navbar;