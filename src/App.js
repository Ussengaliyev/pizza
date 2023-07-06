import React from 'react';
import './scss/app.scss';
import Header from './components/header';
import Categories from './components/categories';
import Sort from './components/sort';
import PizzaBlock from './components/PizzaBlock';



function App() {
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    fetch('https://64a69e93096b3f0fcc80230a.mockapi.io/items')
      .then((response) => response.json())
      .then((arr) => {
        setItems(arr)
      })
  }, [])


  return (
    <div className ="wrapper">
      < Header />
      <div className ="content"> 
        <div className ="container">
          <div className ="content__top">
            < Categories />
            < Sort />
          </div>
          <h2 className ="content__title">Все пиццы</h2>
          <div className ="content__items">
            {items.map((obj) => (
                < PizzaBlock {...obj} />
              ))}
                </div>
              </div>
            </div>
          </div>
  );
}

export default App;
