import './App.css';
import './scss/app.scss';
import Header from './components/Header.tsx';
import Cartegories from './components/Categories.tsx';
import Sort from './components/Sort.tsx';
import PizzaBlock from './components/PizzaBlock.tsx';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Cartegories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock title="Арривалс" price={1100} />
            <PizzaBlock title="Бабушкина" price={2222} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
