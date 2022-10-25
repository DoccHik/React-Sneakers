import "./App.scss";

function App() {
  return (
    <div className="wrapper">
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
            <img src="/img/cart.svg" width={18} height={18} />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="/img/user.svg" width={18} height={18} />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
        <div className="card">
          <img
            width={133}
            height={112}
            src="./img/sneakers/1.jpg"
            alt="Product image"
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
      </div>
    </div>
  );
}

export default App;
