import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.svg" alt="Logo" />
          <div>
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img src="/img/cart.svg" alt="Cart" width={18} height={18} />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="/img/user.svg" width={18} alt="User" height={18} />
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
