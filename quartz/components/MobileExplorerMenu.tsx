import { useState } from "react";
import * as Component from "./index";  // Importing components like Explorer, HamburgerMenuButton
import HamburgerMenuButton from "./HamburgerMenuButton";

const MobileExplorerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Component.MobileOnly>
        <HamburgerMenuButton onClick={toggleMenu} />  {/* Hamburger button */}
      </Component.MobileOnly>

      {/* Explorer menu for mobile view */}
      {isMenuOpen && (
        <div className={`explorer-menu ${isMenuOpen ? "open" : ""}`}>
          <Component.Explorer />  {/* The Explorer component */}
        </div>
      )}
    </div>
  );
};

export default MobileExplorerMenu;
