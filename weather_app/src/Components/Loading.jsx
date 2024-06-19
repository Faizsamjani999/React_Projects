import "./Loading.modules.css"
import React from 'react'

function Loading() {
  return (
    <>
    <div class="smart-glass" style={{position:"absolute",top:"150px"}}>
  <h1></h1>
  <div class="logo">
    <div class="circle">
      <div class="circle">
        <div class="circle">
        </div>
      </div>
    </div>
    <div class="hold-x">
      <div class="xbox"></div>
    </div>
  </div>
  <div class="loading-text">
    Loading...
  </div>
</div>
    
    </>
  )
}

export default Loading