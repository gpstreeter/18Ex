import React, {useState} from 'react';
import './Navbar.css';
import Quotes from '../../Images/Daco_4284074.png'

const Navbar = ({component}) => {
    const [menuActive, setMenuState] = useState(false);

        return(
            <nav className='navBar'>
                <a className='navbar-logo' href='/'><img className='img' src={Quotes} alt='' /></a>
                <div className='end left' onClick={() => setMenuState(!menuActive)}></div>
                <div className='toggle' onClick={() => setMenuState(!menuActive)}></div>
                <div className='end right' onClick={() => setMenuState(!menuActive)}></div>
                <div className={`nav-links ${menuActive? "open" : ""}`}>
                    <span className="exercises">Exercises</span>
                    <ul className='list'>
                        <li className="links"><a href="../WorkInProgress" className="button">1</a></li>
                        <li className="links"><a href="../WorkInProgress" className="button">2</a></li>
                        <li className="links"><a href="../WorkInProgress" className="button">3</a></li>
                        <li className="links"><a href="../WorkInProgress" className="button">4</a></li>
                        <li className="links"><a href="../WorkInProgress" className="button">5</a></li>
                        <li className="links"><a href="../WorkInProgress" className="button">6</a></li>
                        <li className="links"><a href="../WorkInProgress" className="button">7</a></li>
                        <li className="links"><a href="../WorkInProgress" className="button">8</a></li>
                        <li className="links"><a href="../WorkInProgress" className="button">9</a></li>
                        <li className="links"><a href="../WorkInProgress" className="button">10</a></li>
                        <li className="links"><a href="../WorkInProgress" className="button">11</a></li>
                        <li className="links"><a href="../WorkInProgress" className="button">12</a></li>
                        <li className="links"><a href="../WorkInProgress" className="button">13</a></li>
                        <li className="links"><a href="../WorkInProgress" className="button">14</a></li>
                        <li className="links"><a href="../WorkInProgress" className="button">15</a></li>
                        <li className="links"><a href="../WorkInProgress" className="button">16</a></li>
                        <li className="links"><a href="../WorkInProgress" className="button">17</a></li>
                        <li className="links"><a href="../WorkInProgress" className="button">18</a></li>
                        <div className={`background ${menuActive? "open" : "" }`}></div>
                    </ul>
                </div>
            </nav>

        )


}


export default Navbar;


