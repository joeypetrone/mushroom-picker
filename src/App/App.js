import React from 'react';
import './App.scss';

import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';
import Basket from '../components/Basket/Basket';

class App extends React.Component {
  state = {
    mushrooms: [],
    basket: [],
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    const basket = mushroomData.getBasket();
    this.setState({ mushrooms, basket });
  }

  pickAMushroom = () => {
    mushroomData.pickAMushroom();
    const basket = mushroomData.getBasket();
    this.setState({ basket });
  }

  playAgain = () => {
    mushroomData.resetGame();
    const basket = mushroomData.getBasket();
    this.setState({ basket });
  }

  totalQuantity = () => {
    let mushroomsInBasket = 0;
    const basket = mushroomData.getBasket();

    if (basket.length === 0) {
      // SKIP
    } else {
      basket.forEach((mushroom) => {
        mushroomsInBasket += mushroom.quantity;
      });
    }

    return mushroomsInBasket;
  }

  backgroundSelector = () => {

  }

  render() {
    const { mushrooms, basket } = this.state;

    return (
      <div className={basket.length === 16 ? 'App trippy-gradient' : 'App'}>
        <h1 className="p-2">Mushroom Picker</h1>
        {basket.length === 16 ? (
          <button className="btn btn-danger mb-3" onClick={this.playAgain}>Play Again</button>
        ) : (
          <button className="btn btn-danger mb-3" onClick={this.pickAMushroom}>Pick Mushroom</button>
        )}
        <h2>Basket</h2>
        <Basket basket={basket} totalQuantity={this.totalQuantity}/>
        <h2>Forest</h2>
        <Forest mushrooms={mushrooms} />
      </div>
    );
  }
}

export default App;
