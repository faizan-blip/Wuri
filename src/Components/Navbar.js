import * as React from 'react';
import { useState } from 'react';

export default function Navbar() {
    const [isTransparent, setIsTransparent] = useState(true);

    window.onscroll = function () {
        if (window.scrollY <= 70) {
          setIsTransparent(true);
        } else {
          setIsTransparent(false);
        }
      };
    
  return (
<>
<div style={{height:"4.5em" , display:"flex" , justifyContent:"space-between" , alignItems:"center" , position:"sticky" , top:"0" ,  background: isTransparent ? '#100a2f' : 'none',
          backdropFilter: isTransparent ? 'none' : 'blur(14px) saturate(180%)',
          transition: 'all 0.5s ease', zIndex:"1" , boxShadow:"2px 2px 5px black"}}>
   <h2 style={{fontSize:"35px" , color:"white" ,fontWeight:"600" , marginLeft:"0.5em"}}>WURI</h2>
   <button style={{background:"none" , marginRight:"0.7em" , color:"white", border:"2px solid rgba(255, 255, 255)",borderRadius: "14px" , padding:"0.65em 0.7em" , fontSize:"17px",fontWeight:"600" }} className='button1'>Writing Assistant</button>
</div>
</>
  );
}