import React, { useState, useEffect } from 'react';

interface HamburgerMenuButtonProps {
  onClick?: (value: boolean) => void;
}

const HamburgerMenuButton: React.FC<HamburgerMenuButtonProps> = ({ onClick }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true)
  }, [])


  const handleClick = () => {
    setIsActive(!isActive);
    if(onClick) {
      onClick(isActive);
    }
  };

  return (
    <button data-testid="hamburger-button" className={`hamburger-menu-button ${isActive ? '' : 'active'}`} onClick={handleClick}>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </button>
  );
};

export default HamburgerMenuButton;
