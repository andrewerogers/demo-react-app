import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

// PokemonRow component with props
//    i. Can define events in react components
//    ii. Instantiation requires handler implementation
const PokemonRow = ({ pokemon, onSelect, handleShow }) => (
    <tr>          
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button onClick = {function() {
          onSelect(pokemon)
          handleShow(true)
        }}>View Details</Button>
      </td>
    </tr>
  );
  
  PokemonRow.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.shape({
        english: PropTypes.string,
      }),
      type: PropTypes.arrayOf(PropTypes.string),
    }),
    onSelect: PropTypes.func,
  };

  export default PokemonRow;