


function Show({data})
{
    return(
        data.map((val)=>{
            return(
                <tr id="subTr">
                    <td>{val.fname}</td>
                    <td>{val.lname}</td>
                    <td>{val.dob}</td>
                    <td>{val.gender}</td>
                    <td>{val.email}</td>
                    <td>{val.number}</td>
                    <img src={val.img} alt="" id="imageId"/>
                </tr>
            )
        })
    )
}

export default Show