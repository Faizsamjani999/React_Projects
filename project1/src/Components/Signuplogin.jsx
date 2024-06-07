import { useState } from "react"
import Show from "./Show";
import Swal from 'sweetalert2'


function Signuplogin(){

    const [state,setState] = useState("data");
    const [pname,setPname] = useState("");
    const [bname,setBname] = useState("");
    const [price,setPrice] = useState("");
    const [cat,setCat] = useState("");
    const [des,setDes] = useState("");
    const [img,setImg] = useState("")

    const [arr,setArr] = useState([])

    console.log(img);

    function added(){

        let obj = {
            pname : pname,
            bname : bname,
            price : price,
            cat : cat,
            des : des,
            img : img
        }
        setArr([...arr,obj])

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Product Added Successfully",
            showConfirmButton: false,
            timer: 1500
          });
        
        
    }

    function showData()
    {
        setState("data_fetch");
    }

    console.log(arr);

    return(
        <div>
            {
                state === "data" ? <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div class="wrapper wrapper--w680">
            <div class="card card-4">
                <div class="card-body">
                    <h2 class="title">Product Registration Form</h2>
                    
                        <div class="row row-space">
                            <div class="col-2">
                                <div class="input-group">
                                    <label class="label">Product Name</label>
                                    <input class="input--style-4" type="text" name="first_name" onChange={(val)=>{setPname(val.target.value)}} />
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="input-group">
                                    <label class="label">Product Brand</label>
                                    <input class="input--style-4" type="text" name="last_name" onChange={(val)=>{setBname(val.target.value)}} />
                                </div>
                            </div>
                        </div>
                        <div class="row row-space">
                            <div class="col-2">
                                <div class="input-group">
                                    <label class="label">Product Price</label>
                                    <input class="input--style-4" type="text" name="first_name" onChange={(val)=>{setPrice(val.target.value)}} />
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="input-group">
                                    <label class="label">Product Category</label>
                                    <input class="input--style-4" type="text" name="last_name" onChange={(val)=>{setCat(val.target.value)}} />
                                </div>
                            </div>
                        </div>
                        <div class="row row-space">
                            <div class="col-2">
                                <div class="input-group">
                                    <label class="label">Product Description</label>
                                    <input class="input--style-4" type="text" name="first_name" onChange={(val)=>{setDes(val.target.value)}} />
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="input-group">
                                    <label class="label">Product Image Link</label>
                                    <input class="input--style-4" type="text" name="last_name" onChange={(val)=>{setImg(val.target.value)}} />
                                </div>
                            </div>
                        </div>
                        
                        <div class="p-t-15">
                            <button class="btn btn--radius-2 btn--blue" onClick={added}>Submit</button>
                        </div>
                        <div class="p-t-15">
                            <button class="btn btn--radius-2 btn--blue" onClick={showData}>Show Data</button>
                        </div>
                </div>
            </div>
        </div>
    </div> : <div>
        <table style={{width : "100%"}}>
                <tr id="mainTr">
                    <th>Product Name</th>
                    <th>Brand Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th id="imgTh">Image</th>
                </tr>
                
                    <Show data={arr} />  
        </table>
                    <div style={{width : "100%",height: "40px",display : "flex",justifyContent : "center"}}>
                    <button type="button" style={{width : "250px",fontSize:"20px",fontWeight:"bold",backgroundColor:"green",color:"white",cursor:"pointer"}} onClick={()=>{setState("data")}}>Back To Form</button>
                    </div>
    </div>
            }

        </div>
    )
}

export default Signuplogin