import React, { useState } from 'react'

const SideBar = p => {
  const [activeItem, setActive] = useState('home');

  const clickHandler = n => {
    setActive(n);
    p.history.push(`/${n}`);
  };

  const navItem = (label, name) => {
    let cName = 'nav-item';
    if (activeItem === name) { cName += ' active'; }

    return (
      <li className={cName} onClick={() => clickHandler(name)} >
        <a className="nav-link">{label}</a>
      </li>
    );
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand">Micro FE Demo</a>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto">
            {navItem('Home', '')}
            {navItem('Example 1', 'ex1')}
            {navItem('Example 2', 'ex2')}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
