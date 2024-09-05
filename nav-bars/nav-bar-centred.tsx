import "../components-css/nav-bar-centred.css";
import { useState } from "react";

function NavBarCentred() {

  let links = ["Home", "Products", "About", "Contact"]
    
  const [showMenuBox, setShowMenuBox] = useState(false)

  return (
    <>
        <nav>
            <ul>
                <li className="middle_link">LOVELY</li>
                {links.map((link, index) => (
                <li
                    key={link}
                    className = {index <= 1 ? 'left_links links' : 'right_links links'}
                >
                    {link}
                </li>
                ))}
                {}
                <div className="ham-menu"
                onClick={() => {
                    setShowMenuBox(!showMenuBox)
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </ul>
        </nav>

        <div className={showMenuBox ? 'off-screen-menu' : 'off-screen-menu-hide'}>
            <ul>
            {links.map((link) => (
                <li
                    key={link}
                >
                    {link}
                </li>
                ))}
            </ul>
        </div>
    </>
  );
}

export default NavBarCentred;