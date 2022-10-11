import { useState, useEffect } from "react";
import PokemonList from "./components/PokemonList";
import axios from "axios";
import Pagination from "./components/Pagination";
import { Button } from "react-bootstrap";

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [nextPageUrl, setNextPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setPrevPageUrl(res.data.previous)
      setNextPageUrl(res.data.next)
      setPokemon(res.data.results.map(p => p.name))
    })

    return () => cancel()
  }, [currentPageUrl])

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  if (loading) return "Loading..."

  return (
    <>
      <div>Hello, world!</div>
      <PokemonList pokemon={pokemon} />
      <Pagination
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
      />
      <Button>Press Me!</Button>
    </>
  );
}

export default App;
