import React from 'react';
import './scss/app.scss';
import Header from './components/header';
import Categories from './components/categories';
import Sort from './components/sort';
import PizzaBlock from './components/PizzaBlock';

function App() {
  return (
    <div className ="wrapper">
      < Header />
      <div className ="content"> 
        <div className ="container">
          <div className ="content__top">
            < Categories />
            < Sort ddqw/>
          </div>
          <h2 className ="content__title">Все пиццы</h2>
          <div className ="content__items">
            < PizzaBlock title = 'Мексиканская' price = '500'/>
            < PizzaBlock title = 'Мексиканская' price = '300'/>
            < PizzaBlock title = 'Мексиканская' price = '500'/>
            < PizzaBlock title = 'Мексиканская' price = '500'/>
            < PizzaBlock title = 'Мексиканская' price = '500'/>
            < PizzaBlock title = 'Мексиканская' price = '500'/>
            < PizzaBlock title = 'Мексиканская' price = '500'/>
            < PizzaBlock title = 'Мексиканская' price = '500'/>
            < PizzaBlock title = 'Мексиканская' price = '500'/>
                </div>
              </div>
            </div>
          </div>
  );
}

export default App;
