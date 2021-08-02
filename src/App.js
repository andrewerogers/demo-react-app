import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import pokemon from './pokemon.json';

// PokemonRow component with props
//    i. Can define events in react components
//    ii. Implement when instantiated
const PokemonRow = ({ pokemon, onSelect }) => (
  <tr>          
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td>
      <button onClick = {() => onSelect(pokemon)}>select</button>
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
  <div>
    <h1>{name.english}</h1>
  </div>
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
        width: 800,
        topPadding: "1rem",
      }}
    >
      <h1 className="title">Pokemon Search</h1>
      <input 
        value={filter}
        onChange={(evt) => filterSet(evt.target.value)}
      />
      <div
       style={{
         display: "grid",
         gridTemplateColumns: "70% 30%",
         gridColumnGap: "1rem"
       }}
      >
        <div>
          <table width="100%">
            <thead>
              <tr>          
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {pokemon.filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase()))
              .slice(0,40).map((pokemon) => (
                <PokemonRow pokemon={ pokemon } key={pokemon.id} onSelect={(pokemon) => selectedItemSet(pokemon)} />          
              ))}
            </tbody>
          </table>
        </div>
      {selectedItem && (
        <PokemonInfo {...selectedItem}/>
      )}
      </div>
    </div>
  );
}

export default App;
