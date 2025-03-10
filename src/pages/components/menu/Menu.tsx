import React from 'react';
import './menu.css'; // Importe o arquivo CSS

interface MenuProps {
  onLogout: () => void;
}

const Menu: React.FC<MenuProps> = ({ onLogout }) => {
  return (
    <div className="menu-container">
      <div className="menu-logo-container">
        <img src="/logo_capys.png" alt="Logo" className="menu-logo" />
      </div>
      <button onClick={onLogout} className="menu-logout-button">
        Sair
      </button>
    </div>
  );
};

export default Menu;