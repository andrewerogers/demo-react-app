import React from 'react';

import PokemonInfo from '../pokemon/PokemonInfo.js';
import PokemonRow from '../pokemon/PokemonRow.js';
import pokemon from '../pokemon/pokemon.json';

// Bootstrap imports 
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function Home() {
    const [filter, filterSet] = React.useState("");
    const [selectedItem, selectedItemSet] = React.useState(null);
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return <div
    style={{
      margin: "auto",
      width: 800,
      padding: "2rem",
      backgroundColor: '#DEDEDE'
    }}
    >
      <InputGroup 
        value={filter}
        onChange={(evt) => filterSet(evt.target.value)}
      >
        <FormControl
          placeholder="Search a pokemon"
          aria-label="Search a pokemon"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
  
      <div
      style={{
        paddingTop: "1rem",
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
              .slice(0,15).map((pokemon) => (
                <PokemonRow pokemon={ pokemon } key={pokemon.id} 
                onSelect={(pokemon) => selectedItemSet(pokemon)} handleShow = {handleShow} />          
              ))}
            </tbody>
          </Table>
        </div>
      {selectedItem && (
        <PokemonInfo show={show} handleClose={handleClose} {...selectedItem}/>
      )}
      </div>
  </div>;
  }

  export default Home;