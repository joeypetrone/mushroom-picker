import React from 'react';
import './App.scss';

import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';
import Basket from '../components/Basket/Basket';

class App extends React.Component {
  state = {
    mushrooms: [],
    basket: [],
    currentMushroomName: '',
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    const basket = mushroomData.getBasket();
    this.setState({ mushrooms, basket });
  }

  pickAMushroom = () => {
    const currentMushroom = mushroomData.pickAMushroom();
    const currentMushroomName = currentMushroom.name;
    const basket = mushroomData.getBasket();
    this.setState({ basket, currentMushroomName });
  }

  playAgain = () => {
    mushroomData.resetGame();
    const basket = mushroomData.getBasket();
    const currentMushroomName = '';
    this.setState({ basket, currentMushroomName });
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

  render() {
    const { mushrooms, basket, currentMushroomName } = this.state;

    const backgroundSelector = () => {
      let selectedBackground = '';
      switch (currentMushroomName) {
        case 'Red Cap' || 'Webcap' || 'Jack-O-Lantern':
          selectedBackground = 'App redcap-background';
          break;
        case 'Webcap':
          selectedBackground = 'App webcap-background';
          break;
        case 'Jack-O-Lantern':
          selectedBackground = 'App jackolantern-background';
          break;
        case 'Death Cap':
          selectedBackground = 'App death-background';
          break;
        case 'Mystikal':
          selectedBackground = 'App trippy-background';
          break;
        default:
          selectedBackground = 'App';
      }
      return selectedBackground;
    };

    return (
      <div className={backgroundSelector()}>
        <h1 className="p-2">Mushroom Picker</h1>
        {basket.length === 16 ? (
          <button className="btn btn-danger mb-3" onClick={this.playAgain}>Play Again</button>
        ) : (
          <button className="btn btn-danger mb-3" onClick={this.pickAMushroom}>Pick Mushroom</button>
        )}
        <h2>Basket</h2>
        <Basket basket={basket} totalQuantity={this.totalQuantity} currentMushroomName={currentMushroomName}/>
        <h2>Forest</h2>
        <Forest mushrooms={mushrooms} currentMushroomName={currentMushroomName}/>
      </div>
    );
  }
}

export default App;
