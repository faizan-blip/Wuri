import React from 'react';
import game from './Images/game.png'
import one from './Images/1.jpg'
import two from './Images/2.jpg'
import three from './Images/3.jpg'
export default function Games() {
  const Games = [    { id: '1' , background:`url(${one})` },    { id: '2' ,  background:`url(${two})` },    { id: '3' ,  background:`url(${three})` },    { id: '4' ,  background:`url(${one})` },    { id: '5' ,  background:`url(${two})` },   ];

  return (
    <>
      <div
        style={{
          height: '70vh',
          backgroundColor: '#100a2f',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '25px',
        }}
      >
        <div style={{ width: '70%', height: '2px', background: 'white' }}></div>
       <div style={{display:"flex" , justifyContent:"center" ,alignItems:"center" , margin:"0 1em"}} className='head'><h3 style={{fontSize:"30px" , color:"white" , fontWeight:"600"}}>Games Created Using Wuri</h3>
       <img src={game} alt=""  />
       </div> 
       <div
  style={{
    display: 'flex',
    color: 'white',
    scrollBehavior: 'smooth',
    overflowX: 'scroll',
    width:"100%",
  }}
  className='slider'
>
  {Games.map((data) => (
    <div key={data.id} style={{background:data.background , backgroundSize:"100% 100%"}}></div>
  ))}
</div>
      </div>
    </>
  );
}
