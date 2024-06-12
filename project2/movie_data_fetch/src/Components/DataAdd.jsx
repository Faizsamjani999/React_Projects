import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react'
import DataFetch from './DataFetch';

const DataAdd = ()=>{

    const [arr,setArr] = useState([]);
    const [movie,setMovie] = useState("");
    const [load,setLoad] = useState(true);

    console.log(movie);

    const fetch = ()=>{
        setLoad(true)
        axios(`https://www.omdbapi.com/?t=${movie}&apikey=8df46c2c`)
        .then((res)=>{
            console.log(res.data);
            setArr(res.data)
            setLoad(false)
        })
    }

    useEffect(()=>{
        fetch()
    },[])

    console.log(arr);

    return(
        <div id='main'>
            <header>
                <div id='headerSub'>
                    <input type="text" className='form-control' placeholder='Enter Movie Name' onChange={(val)=>{setMovie(val.target.value)}}/>
                </div>
                <button className='btn btn-primary' onClick={fetch}>Fetch Movie</button>
            </header>
            <div id="fetch">
                <div id="fetchSub">
                    {
                        load ? <h1>Loading...</h1> : <DataFetch arr={arr}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default DataAdd