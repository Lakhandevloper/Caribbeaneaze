import React, { Component } from 'react'
import SceensHeader from './Components/Deshbord/ScreensHeader'
import JobsDetailes from './Components/Deshbord/JobsDetailes'
import Booking from './Components/Deshbord/Booking'
export default class Deshbord extends Component {
  render() {
    return (
        <div>
 <SceensHeader/>
      <div style={{display:'flex', flexDirection:'row',width:'80%',alignItems:'center',marginTop:25,justifyContent:'space-between',alignContent:'center'}}>
       
        <div style={{ flexDirection:'row',display:"flex",marginLeft:30,}}>
            
        <img src={require('../assets/profile.png')} alt=''/>
        <div style={{marginLeft:20 }}>
            <h3>John Doe</h3>
            <p style={{color:'#64748B'}}> 2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
            <p style={{color:'#64748B'}}>(200)</p>
            </div>
            
            <button style={{height:42,marginLeft:20,}} class=" me-2 btn btn-outline-dark " type="submit">View Location</button>
        </div>

<div style={{display:'flex',justifyContent:'flex-end'}}>
            <button style={{ height: 48, backgroundColor: '#0F172A', color: 'white' }} className="me-2 btn btn-outline-dark"
    type="submit">
    My Profile 
    </button>
</div>
       
      </div>



      <div style={{  justifyContent:'center',alignItems:'center',borderTop:'1px solid',borderTopColor:'#E2E8F0'}}  >
      <div style={{display:'flex', padding:20}}>
        <div style={{width:'20%',}}>
        <JobsDetailes/>
         </div>
         <div style={{borderLeft:'1px solid'}}>
         <Booking/>
         </div>
      
      </div>
     </div>
      <div>
       
      </div>



      </div>
    )
  }
}












































