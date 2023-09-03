import './HomePage.scss';

import logo from "../../assets/logos/logo-no-background.png";
import penguin from "../../assets/images/sample-penguin.jpg";
import { Link } from "react-router-dom";

export const HomePage = () => {
  
  return (
    <main className = "homepage">
        <section className = "homepage__content">
          <img className = "homepage__logo"
                  src = {logo}
                  alt = "HappyFIT logo"
              />
          <h1 className = "homepage__title">Welcome to HappyFIT!</h1>

        <div className = "homepage__link-container">
          <Link to ="/instructions" className = "homepage__link">
              Instructions
          </Link>

          <Link to ="/exercises" className = "homepage__link">
              Exercise Library
          </Link>

          <Link to ="/about" className = "homepage__link">
              About
          </Link>
        </div>

        </section>
        <img className = "homepage__penguin"
                  src = {penguin}
                  alt = "HappyFIT penguin mascot"
              />

        
    </main>
  )
}