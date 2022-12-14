import React from "react";

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="favorite">
          <img src="./img/heart-unliked.svg" alt="Unliked" />
        </div>
        <img
          width={133}
          height={112}
          src="./img/sneakers/1.jpg"
          alt="Productimage"
        />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="card-bottom">
          <div>
            <span>Цена:</span>
            <b>12 999 руб.</b>
          </div>
          <button className="card__btn">
            <img src="/img/plus.svg" width={11} height={11} alt="Plus" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
