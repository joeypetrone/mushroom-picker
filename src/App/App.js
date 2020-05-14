import React from 'react';
import './App.scss';

import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';
// import Basket from '../components/Basket/Basket';

class App extends React.Component {
  state = {
    mushrooms: [],
    // basket: [],
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    // const basket = mushroomData.getBasket();
    this.setState({ mushrooms });
  }

  render() {
    const { mushrooms } = this.state;
    // const { basket } = this.state.basket;

    return (
      <div className="App">
        <h3 className="mt-3">Mushroom Picker</h3>
        <h4>Forest</h4>
        <Forest mushrooms={mushrooms}/>
        {
          // <Basket basket={basket} />
        }
      </div>
    );
  }
}

export default App;
