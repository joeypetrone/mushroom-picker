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
          <div className={mushroom.hasWon ? 'card trippy-mushroom' : 'card'}>
          <img className="card-img-top" src={mushroom.imgUrl} alt="Mushroom Card" />
          <div className={mushroom.poisonEffect || mushroom.deadlyEffect ? 'card-body bg-danger' : 'card-body'}>
          <h5 className="card-title m-0">{mushroom.name}</h5>
          {
            mushroom.quantity ? (
              <small>QTY: {mushroom.quantity}</small>
            ) : (
              <small></small>
            )
          }
          <p className="card-text mt-2">{mushroom.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Mushroom;
