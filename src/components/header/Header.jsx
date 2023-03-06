import {Link} from "react-router-dom";

const Header = (Props) => {
    return (
        <header>
            <ul className="header-nav">
                <li><Link to='/'>Главная</Link></li>
                <li><Link to='/catalog'>Каталог</Link></li>
            </ul>
        </header>
    );
};

export default Header