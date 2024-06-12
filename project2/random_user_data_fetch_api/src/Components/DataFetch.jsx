

function DataFetch({arr}){
    return(
        <div>
            {
                arr.map((val)=>{
                    return(
                        <div id="fetchingDiv">
                            <img src={val.picture.large} alt=""/>
                            <h1>Name - {val.name.title} {val.name.first} {val.name.last}</h1>
                            <p>Email - {val.email}</p>
                            <p>Phone Number - {val.phone}</p>
                            <p>Location - {val.location.street.number},{val.location.street.name},{val.location.city},{val.location.state}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DataFetch