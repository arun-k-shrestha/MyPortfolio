import dummy from "../../images/dummy.png"
import data from "./data"
import {VscColorMode} from "react-icons/vsc"
import "./Navbar.css"

function Navbar(){

    return (
    <nav>
        <div className="container nav__container">
            <a href="index.html" className="nav__logo">
                <img src={dummy} alt="dummyImg"/>
            </a>
            <ul className="nav__menu">
                {data.map(props => <li  key={props.item}>
                                        <a href={props.link}> {props.title}</a>
                                    </li>            
                        )
                }
            </ul>
            <button id ="theme__icon"> <VscColorMode/> </button>
        </div>
    </nav>
    )
}

export default Navbar