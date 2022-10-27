import React from "react";

const Drawer = () => {
  return (
    <>
      <div className="overlay">
        <div className="drawer">
          <div className="drawer-top">
            <h2>
              Корзина
              <img
                className="cart-item__btn"
                src="./img/btn-remove.svg"
                alt="Remove"
              />
            </h2>
          </div>
          <div className="cart-items">
            <div className="cart-item">
              <img
                className="cart-item__img"
                width={70}
                height={70}
                src="./img/sneakers/1.jpg"
                alt="Sneakers"
              />
              <div className="cart-item__descr">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="cart-item__btn"
                src="./img/btn-remove.svg"
                alt="Remove"
              />
            </div>
            <div className="cart-item">
              <img
                className="cart-item__img"
                width={70}
                height={70}
                src="./img/sneakers/2.jpg"
                alt="Sneakers"
              />
              <div className="cart-item__descr">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="cart-item__btn"
                src="./img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          </div>
          <div className="cart-total">
            <ul className="cart-total__list">
              <li className="cart-total__item">
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li className="cart-total__item">
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="cart-total__btn">
              Оформить заказ <img src="./img/arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
