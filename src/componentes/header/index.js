import './header.css';
import {Link} from 'react-router-dom'

// Header da pagina
function Header (){
 return(
    <header>
        <Link className='logo' to='/'>Trend Flix</Link>
        <Link className='favoritos' to='/favoritos'>Meus Fimes</Link>
        <Link className='sobre' to='/sobre'>Sobre</Link>
        <Link className='proximos' to='/EmBreve'>Em Breve</Link>
    </header>
 )   
}

export default Header;