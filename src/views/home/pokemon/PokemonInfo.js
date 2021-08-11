import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
  
  // Info modal 
  const PokemonInfo = ({ name, base, show, handleClose }) => (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{name.english}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <h5>Properties:</h5>
          <ul>
            <li>HP: {base.HP}</li>
            <li>Attack: {base.Attack}</li>
            <li>Defense: {base.Defense}</li>
            <li>Special Attack: {base.SpAttack}</li>
            <li>Special Defense: {base.SpDefense}</li>
            <li>Speed: {base.Speed}</li>
          </ul>          
        </Modal.Body>
    </Modal>
  );
  
  PokemonInfo.propTypes = {
    name: PropTypes.shape({
      english: PropTypes.string,
    }),
    base: PropTypes.shape({
      HP: PropTypes.number,
      Attack: PropTypes.number,
      Defense: PropTypes.number,
      SpAttack: PropTypes.number,
      SpDefense: PropTypes.number,
      Speed: PropTypes.number
    })
  };

  export default PokemonInfo;