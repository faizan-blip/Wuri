import React from 'react'
import landing from './Images/WURI.png'
import video from './Images/video.mp4'
import logo from './Images/logo.png'
import { useState } from 'react'
import { useEffect } from 'react'
export default function Landing() {

   const[seconds , setSeconds] = useState(0);
   const[minutes , setMinutes] = useState(0);
    const[startie, setStartie] = useState(false)
   useEffect(()=>{
    var timer;
    if(startie){
 timer = setInterval(()=>{


        setSeconds(seconds + 1)
      
        if(seconds === 59){
            setMinutes(minutes+1)
            setSeconds(0)
        }

    },1000)
}
    return()=> clearInterval(timer)
   })

   let progress = 80;
   var percentage = `${progress}%`;
   const starPoints = [];
   
   for (let i = 20; i <= 100; i += 20) {
     if (progress >= i) {
       starPoints.push(<span key={i}>★</span>);
     } else {
       starPoints.push(<span key={i}>☆</span>);
     }
   }
   
   const start = () => {
     setStartie(true);
     setInterval(() => {
       progress += 5;
       if (progress > 100) {
         progress = 100; 
       }
       percentage = `${progress}%`; 
       starPoints.length = 0; 
       for (let i = 20; i <= 100; i += 20) {
         if (progress >= i) {
           starPoints.push(<span key={i}>★</span>);
         } else {
           starPoints.push(<span key={i}>☆</span>);
         }
       }
     }, 1000);
   };
   
  return (
<>
<body style={{backgroundImage:`url(${landing})`,backgroundPosition:"center" , backgroundRepeat:"no-repeat" , backgroundColor:"#100a2f" , display:"flex" , justifyContent:"center" , alignItems:"center" }} className='body'>
    <div style={{ display:"flex" , justifyContent:"space-evenly" , alignItems:"center" , gap:"20px" , position:"relative" , top:"3em"}}  className='flex'>
      <div style={{width: "600px" ,height: "500px" , backdropFilter:"blur(8.5px)" , display:"flex" , flexDirection:"column" , borderRadius:"15px" , filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))", padding:"0 2em" ,  backgroundColor: "rgba(0, 0, 0, 0.50)" }} className='form'>
         <div style={{display:"flex" , justifyContent:"space-between" , margin:"0.5em 0", alignItems:"center"}}>
        <input style={{background:"none", color:"white", border:"2px solid rgba(255, 255, 255)",borderRadius: "14px" , width:"190px" , height:"40px" }} type="text" name="" id="" placeholder='Enter Your App Name' className='button2' />
         <img src={logo} alt="" style={{marginRight:"6em"}} width='150px' className='img' />
         </div>
         <div style={{display:"flex" , flexDirection:"column"  }}>
           <h3 style={{color:"white"}}>Upload Game Files:</h3>
           <div style={{display:"flex", gap:"35px"}}>
            <button className='but' style={{width: "170px",height: "44px" , boxShadow: "inset -4px 4px 4px rgba(0, 0, 0, 0.25), inset 5px -1px 4px rgba(0, 0, 0, 0.25)" , border:"none" , borderRadius:"15px", fontWeight:"600" , fontSize:"17px"}}>CSV for Story</button>
            <button className='but' style={{width: "170px",height: "44px" , boxShadow: "inset -4px 4px 4px rgba(0, 0, 0, 0.25), inset 5px -1px 4px rgba(0, 0, 0, 0.25)" , border:"none" , borderRadius:"15px", fontWeight:"600" , fontSize:"17px"}}>Game Assets</button>
            <button className='but' style={{width: "170px",height: "44px" , boxShadow: "inset -4px 4px 4px rgba(0, 0, 0, 0.25), inset 5px -1px 4px rgba(0, 0, 0, 0.25)" , border:"none" , borderRadius:"15px", fontWeight:"600" , fontSize:"17px"}}>App Icon</button>
           </div>
           <a href="/" style={{marginTop:"1em" , color:"blue"}}>Click here to download sample files</a>
           <button  onClick={start} className='submit' style={{marginTop:"1.5em" , 
        background: "linear-gradient(90deg, #D92E2E 3.93%, rgba(46, 78, 248, 0.75) 94.92%)",
        boxShadow: "1px 5px 4px rgba(91, 77, 77, 0.25)",
        borderRadius: "15px",
        width:"250px", height:"50px" , border:"none" , fontSize:"18px" , fontWeight:"700"
        }}>Click to build the game</button>
         <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: percentage }}>
        {starPoints}
      </div>
    </div>
        {startie ?
        <p style={{color:"white" , fontSize:"14px"}}>0{minutes}:{seconds} Minutes remaining</p>
        : <p style={{color:"white" , fontSize:"14px"}}>00:00 Minutes remaining</p>}
         </div>
      </div>
      <div className='video'><video src={video}  width="643"
        height="442" controls /></div>
      </div>
</body>
</>
  )
}
