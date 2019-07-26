import React, { useEffect, useState } from 'react';
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'

import EpisodesCard from "./EpisodesCard"



export default function EpisodesList() {
    // TODO: Add useState to track data from useEffect
    const [data, setData] = useState([]);


    useEffect(() => {
        // TODO: Add AJAX/API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

        axios.get(`https://rickandmortyapi.com/api/episode/`)
            .then(e => {
                setData(e.data.results);
            })
            .catch(err => { return ('nothing', err) })
    }, [data])

    return <section>

        <h2>{data.map(e => {
            return (
                <EpisodesCard key={e} data={e} />
            )
        })
        }</h2>
    </section>

}
