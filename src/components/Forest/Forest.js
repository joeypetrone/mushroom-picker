import React from 'react';
import PropTypes from 'prop-types';
import mushroomShape from '../../helpers/propz/mushroomShape';
import Mushroom from '../Mushroom/Mushroom';

import './Forest.scss';

class Forest extends React.Component {
  static propTypes = {
    mushrooms: PropTypes.arrayOf(mushroomShape.mushroomShape),
    pickAMushroom: PropTypes.func,
  }

  render() {
    const { mushrooms } = this.props;
    const makeForest = mushrooms.map((mushroom) => (
      <Mushroom key={mushroom.id} mushroom={mushroom} />
    ));

    return (
      <div className="Forest d-flex flex-wrap m-3">
        {makeForest}
      </div>
    );
  }
}

export default Forest;
