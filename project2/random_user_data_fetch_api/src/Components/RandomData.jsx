import { useEffect, useState } from "react";
import axios from "axios";
import DataFetch from "./DataFetch";
import LoadingSpinner from "./LoadingSpinner";



function RandomData()
{
    const [arr,setArr] = useState([]);
    const [load,setLoad] = useState(true)

    function fetch()
        {
            setLoad(true)
            axios('https://randomuser.me/api/')
        .then((res)=>{
            console.log(res);
            setArr(res.data.results)
            setLoad(false)
        })
        .catch((err)=>{
            console.log("Error Fetchinf Data :",err);
            setLoad(false)
        })
        }

    useEffect(()=>{
        fetch()    
    },[])
    

    console.log(arr);


    return(
        <div id="main">
            <h1>Fetch Random Data</h1>
            <button className="btn btn-primary" onClick={fetch}>Fetch Data</button>
            <div id="dataAdd">
                {
                    load ? <LoadingSpinner/> : <DataFetch  arr = {arr}/>
                }
            </div>
        </div>
    )
}

export default RandomData;