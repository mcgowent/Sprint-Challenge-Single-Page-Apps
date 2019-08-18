import React, { useEffect, useState } from 'react';
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'

import CharacterCard from "./CharacterCard"

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

  return <section className='character-list grid-view'>

    <div className="flexCard">{data.map(e => {
      return (
        <CharacterCard key={e} data={e} />
      )
    })
    }</div>
  </section>

}
