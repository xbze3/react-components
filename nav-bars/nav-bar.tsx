import "../components-css/nav-bar.css";
import { useState } from "react";

function NavBar() {

  let links = ["Home", "Products", "About", "Contact"];
  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <li
            key={link}
            className = {selectedIndex == index ? 'active' : ''}
            onClick={() => {
              setSelectedIndex(index)
            }}
            
          >
            {link}
          </li>
        ))}

      </ul>
    </nav>
  );
}

export default NavBar;
