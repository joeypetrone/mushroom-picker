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

  render() {
    const { mushrooms, basket } = this.state;

    return (
      <div className="App">
        <h3 className="mt-3">Mushroom Picker</h3>
        <button className="btn btn-danger" onClick={this.pickAMushroom}>Pick Mushroom</button>
        <h4>Basket</h4>
        <Basket basket={basket} />
        <h4>Forest</h4>
        <Forest mushrooms={mushrooms} />
      </div>
    );
  }
}

export default App;
