import React, {useState , useEffect} from 'react'
import "./styles.css";
import axios from "axios";
import PokeCard from './components/pokeCard/Index'

function App() {

  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")



  const getPokemon = () => {
    axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(response => {
      // função que está setando no estado os 151 pokemons
      setPokeList(response.data.results)
      // console.log(response.data.results)
      
    })
    .catch(err => {
      console.log(err);
    });

  }

  useEffect(() => {
    getPokemon() 
  }, [])

  const changePokemon = (event) => {
    setPokeName(event.target.value)
  }

  return (
    <div className="App">

        <select onChange={changePokemon}>
          <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
      {pokeName && <PokeCard pokemon={pokeName}/> }
    </div>
  );
}

export default App;
