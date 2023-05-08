import Navbar from './components/Navbar.js';
import Characters from './components/Characters.js';
import Pagination from './components/Pagination.js';
import React, { useEffect, useState } from 'react'

function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = 'https://rickandmortyapi.com/api/character';

  const fetchCharacters = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <>
      <Navbar
        brand={'Rick and Morty APP'} />

      <div className='container mt-5'>
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext} />
        <Characters
          characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext} />
      </div>
    </>
  );
}

export default App;