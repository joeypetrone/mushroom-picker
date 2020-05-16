import React from 'react';
import PropTypes from 'prop-types';
import mushroomShape from '../../helpers/propz/mushroomShape';

import './Basket.scss';
import Mushroom from '../Mushroom/Mushroom';

class Basket extends React.Component {
  static propTypes = {
    basket: PropTypes.arrayOf(mushroomShape.mushroomShape),
    currentMushroomName: PropTypes.string.isRequired,
    totalQuantity: PropTypes.func.isRequired,
  }

  render() {
    const { basket, totalQuantity, currentMushroomName } = this.props;
    const makeBasket = basket.map((mushroom) => (
      <Mushroom key={mushroom.id} mushroom={mushroom} currentMushroomName={currentMushroomName}/>
    ));

    return (
      <div className="Basket">
        <small className="d-inline">Variety: {basket.length}</small>
        <small className="d-inline pl-4">Total Quantity: {basket.length === 0 ? 0 : totalQuantity()}</small>
        <small className="d-inline pl-4">Last Picked: {currentMushroomName}</small>
        <div className="d-flex flex-nowrap overflow-auto m-3">
          {makeBasket}
        </div>
      </div>
    );
  }
}

export default Basket;
