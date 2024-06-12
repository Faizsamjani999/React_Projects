

function DataFetch({arr}){
    return(
        <div>
            {
                arr.filter((val)=>{
                    return(
                        <div id="fetch">
                            <div id="poster">
                                
                            </div>
                            <div>
                                <h1>{val.title}</h1>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DataFetch