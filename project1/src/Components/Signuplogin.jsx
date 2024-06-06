import { useState } from "react"
import Show from "./Show";



function Signuplogin(){

    const [state,setState] = useState("data");
    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [dob,setDob] = useState("");
    const [gender,setGender] = useState("");
    const [email,setEmail] = useState("");
    const [number,setNumber] = useState("");
    const [img,setImg] = useState("")

    const [arr,setArr] = useState([])

    console.log(img);

    function added(){

        let obj = {
            fname : fname,
            lname : lname,
            dob : dob,
            gender : gender,
            email : email,
            number : number,
            img : img
        }
        setArr([...arr,obj])

        setState("data_fetch");
        
    }

    console.log(arr);

    return(
        <div>
            {
                state == "data" ? <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div class="wrapper wrapper--w680">
            <div class="card card-4">
                <div class="card-body">
                    <h2 class="title">Registration Form</h2>
                    
                        <div class="row row-space">
                            <div class="col-2">
                                <div class="input-group">
                                    <label class="label">first name</label>
                                    <input class="input--style-4" type="text" name="first_name" onChange={(val)=>{setFname(val.target.value)}} />
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="input-group">
                                    <label class="label">last name</label>
                                    <input class="input--style-4" type="text" name="last_name" onChange={(val)=>{setLname(val.target.value)}} />
                                </div>
                            </div>
                        </div>
                        <div class="row row-space">
                            <div class="col-2">
                                <div class="input-group">
                                    <label class="label">Birthday</label>
                                    <div class="input-group-icon">
                                        <input class="input--style-4 js-datepicker" type="date" name="birthday" onChange={(val)=>{setDob(val.target.value)}} />
                                        <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="input-group">
                                    <label class="label">Gender</label>
                                    <div class="p-t-10">
                                        <label class="radio-container m-r-45">Male
                                            <input type="radio" name="gender" value="Male" onClick={(val)=>{setGender(val.target.value)}} />
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="radio-container">Female
                                            <input type="radio" name="gender" value="Female" onClick={(val)=>{setGender(val.target.value)}} />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row row-space">
                            <div class="col-2">
                                <div class="input-group">
                                    <label class="label">Email</label>
                                    <input class="input--style-4" type="email" name="email" onChange={(val)=>{setEmail(val.target.value)}} />
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="input-group">
                                    <label class="label">Phone Number</label>
                                    <input class="input--style-4" type="text" name="phone" onChange={(val)=>{setNumber(val.target.value)}} />
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="input-group">
                                    <label class="label">Image Link</label>
                                    <input class="input--style-4" type="text" name="phone" onChange={(val)=>{setImg(val.target.value)}} />
                                </div>
                            </div>
                        </div>
                        
                        <div class="p-t-15">
                            <button class="btn btn--radius-2 btn--blue" onClick={added}>Submit</button>
                        </div>
                </div>
            </div>
        </div>
    </div> : <div>
        <table style={{width : "100%"}}>
                <tr id="mainTr">
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Birth Date</th>
                    <th>Gender</th>
                    <th>Email Address</th>
                    <th>Phone Number</th>
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