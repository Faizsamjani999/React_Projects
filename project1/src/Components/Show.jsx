


function Show({data})
{
    return(
        data.map((val)=>{
            return(
                <tr id="subTr" style={{border : "1px solid black"}}>
                    <td style={{fontSize : "20px",textAlign:"center"}}>{val.pname}</td>
                    <td style={{fontSize : "20px",textAlign:"center"}}>{val.bname}</td>
                    <td style={{fontSize : "20px",textAlign:"center"}}>{val.price}</td>
                    <td style={{fontSize : "20px",textAlign:"center"}}>{val.cat}</td>
                    <td style={{fontSize : "15px",textAlign:"center",width : "200px"}}>{val.des}</td>
                    <img src={val.img} alt="" id="imageId"/>
                </tr>
            )
        })
    )
}

export default Show