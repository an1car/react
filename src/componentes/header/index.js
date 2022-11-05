import './header.css';
import {Link} from 'react-router-dom'

// Header da pagina
function Header (){
 return(
    <header>
        <Link className='logo' to='/'>Trend Flix</Link>
        <Link className='favoritos' to='/favoritos'>Meus Fimes</Link>
    </header>
 )   
}

export default Header;