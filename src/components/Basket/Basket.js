import React from 'react';
import PropTypes from 'prop-types';
import mushroomShape from '../../helpers/propz/mushroomShape';

import './Basket.scss';
import Mushroom from '../Mushroom/Mushroom';

class Basket extends React.Component {
  static propTypes = {
    basket: PropTypes.arrayOf(mushroomShape.mushroomShape),
  }

  render() {
    const { basket } = this.props;
    const makeBasket = basket.map((mushroom) => (
      <Mushroom key={mushroom.id} mushroom={mushroom} />
    ));

    return (
      <div className="Basket d-flex flex-nowrap overflow-auto m-3">
        {makeBasket}
      </div>
    );
  }
}

export default Basket;
