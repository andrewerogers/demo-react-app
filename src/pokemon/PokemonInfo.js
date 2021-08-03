import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
  
  // Info modal 
  const PokemonInfo = ({ name, show, handleClose }) => (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{name.english}</Modal.Title>
      </Modal.Header>
    </Modal>
  );
  
  PokemonInfo.propTypes = {
    name: PropTypes.shape({
      english: PropTypes.string,
    })
  };

  export default PokemonInfo;