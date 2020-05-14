import React from 'react';
import mushroomShape from '../../helpers/propz/mushroomShape';
import './Mushroom.scss';

class Mushroom extends React.Component {
  static propTypes = {
    mushroom: mushroomShape.mushroomShape,
  }

  render() {
    const { mushroom } = this.props;

    return (
      <div className="Mushroom col-3 mb-4">
        <div class="card">
          <img class="card-img-top" src={mushroom.imgUrl} alt="Mushroom Card" />
          <div class="card-body">
          <h5 className="card-title">{mushroom.name}</h5>
          <p class="card-text">{mushroom.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Mushroom;
