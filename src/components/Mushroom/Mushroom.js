import React from 'react';
import PropTypes from 'prop-types';
import mushroomShape from '../../helpers/propz/mushroomShape';
import './Mushroom.scss';

class Mushroom extends React.Component {
  static propTypes = {
    mushroom: mushroomShape.mushroomShape,
    currentMushroomName: PropTypes.string.isRequired,
  }

  render() {
    const { mushroom, currentMushroomName } = this.props;

    const backgroundSelector = () => {
      let selectedBackground = '';
      switch (currentMushroomName) {
        case 'Red Cap':
          selectedBackground = 'card redcap-mushroom';
          break;
        case 'Webcap':
          selectedBackground = 'card webcap-mushroom';
          break;
        case 'Jack-O-Lantern':
          selectedBackground = 'card jackolantern-mushroom';
          break;
        case 'Death Cap':
          selectedBackground = 'card death-mushroom';
          break;
        case 'Mystikal':
          selectedBackground = 'card trippy-mushroom';
          break;
        default:
          selectedBackground = 'card';
      }
      return selectedBackground;
    };

    return (
      <div className="Mushroom col-3 mb-4">
          <div className={backgroundSelector()}>
          <img className="card-img-top" src={mushroom.imgUrl} alt="Mushroom Card" />
          <div className='card-body'>
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
