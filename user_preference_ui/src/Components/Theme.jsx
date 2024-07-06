// import {React} from 'react'
import { useEffect, useState } from "react";
import "./Theme.modules.css"
import Dropdown from 'react-bootstrap/Dropdown';

function Theme() {
    const [theme,setTheme] = useState(sessionStorage.getItem('theme') || "light")

    const [lang,setLang] = useState(localStorage.getItem('language') || "english")

  useEffect(()=>{
    sessionStorage.setItem('theme',theme)
  },[theme])

  useEffect(()=>{
    localStorage.setItem("language",lang);
  },[lang])

  const change = (color)=>{
    setTheme(color)
  }

  const changeLang = (language)=>{
    setLang(language)
  }

  
  return (
    <div id="themeMain" className={theme}>
        <div id='sub'>
        <header>
            <div id="logo">
                <h1>USER PREFERENCE - UI</h1>
            </div>
            <div id="btn">
            <Dropdown>
      <Dropdown.Toggle style={{backgroundColor:"#facf5a"}} id="dropdown-basic">
        Theme
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>change('light')}>Light</Dropdown.Item>
        <Dropdown.Item onClick={()=>change('dark')}>Dark</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


    <Dropdown>
      <Dropdown.Toggle style={{backgroundColor:"#2c786c"}} id="dropdown-basic">
        Language
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>changeLang("english")}>English</Dropdown.Item>
        <Dropdown.Item onClick={()=>changeLang("hindi")}>Hindi</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
        </header>

        <div id="write">
            {
                lang === "english" ? <h1>My name is Mohammadfaiz Samjani. I am Fullstack Developer/Mernstack Developer and my Expertise is in NODE JS language and now I am becoming expert in REACT JS and also I am looking for a good job if anyone has requirement of Node JS developer Post Please contact me on my mobile Number is - 9574357690 Thank you in advance</h1> : <h1>मेरा नाम मोहम्मदफ़ैज़ समजानी है। मैं फुलस्टैक डेवलपर हूं और मेरी विशेषज्ञता नोड जेएस भाषा में है और अब मैं रिएक्ट जेएस में विशेषज्ञ बन रहा हूं और साथ ही मैं एक अच्छी नौकरी की तलाश में हूं, अगर किसी को नोड जेएस डेवलपर की आवश्यकता है तो कृपया मुझसे मेरे मोबाइल नंबर पर संपर्क करें - 9574357690 धन्यवाद अग्रिम रूप से</h1>
            }
        </div>
    </div>
    </div>
  )
}

export default Theme