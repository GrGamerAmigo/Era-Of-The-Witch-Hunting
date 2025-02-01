const HamburgerMenuButton = ({ onClick }: { onClick: () => void }) => (
  <button onClick={onClick} className="hamburger-menu-button">
    ☰
  </button>
);

export default HamburgerMenuButton;
