import "./App.scss";
import Card from "./Components/Card/Card";
import Drawer from "./Components/Drawer/Drawer";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="content-row">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="./img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers">
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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;

// ! https://youtu.be/bfj4lEyc4w8?list=PL0FGkDGJQjJEos_0yVkbKjsQ9zGVy3dG7&t=5244
