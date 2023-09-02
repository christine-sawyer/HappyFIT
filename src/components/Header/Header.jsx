import './Header.scss';

import logo from "../../assets/logos/HappyFitSample.jpg";
import { Link } from "react-router-dom";


export const Header = () => {
    return (
      <header className = "header">
        <Link to = "/" className = "header__logo">
            <img className = "header__logo"
                src = {logo}
                alt = "HappyFIT logo"
            />
        </Link>
      </header>
    )
  }