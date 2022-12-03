import dummy from "../../images/dummy.png"
import data from "./IconData"
import "./Header.css"

function Header(){
    return(
        <header id = "header">
            <div className="container header__container">
                <div className = "header__profile">
                    <img src={dummy} alt="Head"/>
                </div>
                <h3>Arun Shrestha</h3>
                <p>Hello, this is Arun!</p>
                <div className="header__cta">
                    <a href="#contact" className="btn primary">Connect</a>
                    <a href="#portfolio" className="btn">My Work</a>
                </div>

                <div className="header__socials">
                    {data.map(props =>
                        <a key={props.id} href={props.link} target="_blank" rel="noopener noreferrer"> 
                            {props.icon}
                        </a>)}
                </div>
            </div>
        </header>)
}

export default Header