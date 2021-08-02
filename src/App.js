import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import pokemon from './pokemon.json';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';


// PokemonRow component with props
//    i. Can define events in react components
//    ii. Implement when instantiated
const PokemonRow = ({ pokemon, onSelect }) => (
  <tr>          
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td>
      <Button onClick = {() => onSelect(pokemon)}>select</Button>
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

const PokemonInfo = ({ name }) => (
  <Modal.Dialog>
    <Modal.Header closeButton>
      <Modal.Title>{name.english}</Modal.Title>
    </Modal.Header>
  </Modal.Dialog>
);

PokemonInfo.propTypes = {
  name: PropTypes.shape({
    english: PropTypes.string,
  })
};


function App() {
  // react state manager [value, set]
  const [filter, filterSet] = React.useState("");
  const [selectedItem, selectedItemSet] = React.useState(null);
  return (
    <div
      style={{
        margin: "auto",
        width: 1000,
        topPadding: "2rem",
      }}
    >
      <h1 className="title">Pokemon Search</h1>
      <input 
        value={filter}
        onChange={(evt) => filterSet(evt.target.value)}
      />
      <div
       style={{
         gridColumnGap: "1rem"
       }}
      >
        <div>
        <Table striped bordered hover variant="dark">
            <thead>
              <tr>          
                <th>Name</th>
                <th>Type</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {pokemon.filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase()))
              .slice(0,40).map((pokemon) => (
                <PokemonRow pokemon={ pokemon } key={pokemon.id} onSelect={(pokemon) => selectedItemSet(pokemon)} />          
              ))}
            </tbody>
          </Table>
        </div>
      {selectedItem && (
        <PokemonInfo {...selectedItem}/>
      )}
      </div>
    </div>
  );
}

export default App;
