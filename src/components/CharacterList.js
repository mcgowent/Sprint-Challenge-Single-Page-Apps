import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);


  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(e => {
        setData(e.data.results);
      })
      .catch(err => { return ('nothing', err) })
  }, [data])
  const tempArray = data.map(e => e)
  return <section className='character-list grid-view'>

    <h2>{tempArray.name}</h2>
  </section>

}
