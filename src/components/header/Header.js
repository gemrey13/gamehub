import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import xbox from '../../images/xbox.png'
import ps4 from '../../images/ps4.png'
import nintendo from '../../images/nintendo.png'

export default function Header() {
  const [activeSubnav, setActiveSubnav] = useState(null);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const homeHandler = () => {
    navigate("/");
  };

  const loginHandler = () => {
    navigate("/login");
  };

  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", "false");
    navigate("/login");
  };

  const handleSubnavToggle = (index) => {
    setActiveSubnav(activeSubnav === index ? null : index);
  };
  
  
  return (
    <nav className="header">
      <div className="logo" onClick={homeHandler}>GAMEHUB</div>

      <div className="navbar">
        <div className={`subnav ${activeSubnav === 0 ? 'active' : 'deactive'}`}>
          <button className="subnavbtn" onClick={() => handleSubnavToggle(0)}>
            Games {activeSubnav === 0 ? <i className="fa fa-caret-up"></i> : <i className="fa fa-caret-down"></i>}
          </button>
          {activeSubnav === 0 && (
            <div className="subnav-content">
              <div className='subnav-links'>
                  <a href="#home">NBA 2K24</a>
                  <a href="#home">SSX TRICKY</a>
                  <a href="#home">TEKKEN 8</a>
                  <a href="#home">GTA V</a>
                  <a href="#home">SPIDERMAN 2</a>
                  <a href="#home">MARIO KART 8 DELUXE</a>
                  <a href="#home">STREET FIGHTER 6</a>
                  <a href="#home">CALL OF DUTY BLACK OPS 3</a>
              </div>
            </div>
          )}
        </div>
        <div className={`subnav ${activeSubnav === 1 ? 'active' : 'deactive'}`}>
          <button className="subnavbtn" onClick={() => handleSubnavToggle(1)}>
            Controller/Joystick {activeSubnav === 1 ? <i className="fa fa-caret-up"></i> : <i className="fa fa-caret-down"></i>}
          </button>
          {activeSubnav === 1 && (
            <div className="subnav-content">
              <div className='subnav-links'>
                <a href="#company" className='controller'><img src={xbox} width='50' />XBOX</a>
                <a href="#team" className='controller'><img src={ps4} width='50' />PS4</a>
                <a href="#careers" className='controller'><img src={nintendo} width='50' />NINTENDO</a>
              </div>
            </div>
          )}
        </div>
        <div className={`subnav ${activeSubnav === 2 ? 'active' : 'deactive'}`}>
          <button className="subnavbtn" onClick={() => handleSubnavToggle(2)}>
            Gaming Console {activeSubnav === 2 ? <i className="fa fa-caret-up"></i> : <i className="fa fa-caret-down"></i>}
          </button>
          {activeSubnav === 2 && (
            <div className="subnav-content">
              <div className='subnav-links'>
                <a href="#bring">PS4</a>
                <a href="#deliver">PS5</a>
                <a href="#package">XBOX</a>
                <a href="#express">NINTENDO</a>
              </div>
            </div>
          )}
        </div>
      </div>

      {isLoggedIn === "true" ?
        <div className="logout_button"><a onClick={logoutHandler}>Logout</a></div>
      :
        <div className="login_button"><a onClick={loginHandler}>Login</a></div>
      }

    </nav>
  );
}
