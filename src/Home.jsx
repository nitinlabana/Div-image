import React from 'react'
import Imga from './Photo/imga.jpg'
import Imga2 from './Photo/imga2.png'
import Imga3 from './Photo/imga3.webp'
import Imga4 from './Photo/imga4.webp'
import Imga5 from './Photo/imga5.webp'



function Home() {
  return (
    <>
    <div className='one'>
     <img src={Imga} alt="" />
    </div>
    <div className='two'>
     <img src={Imga2} alt="" />
    </div>
    <div className='three'>
     <img src={Imga3} alt="" />
    </div>
    <div className='four'>
     <img src={Imga4} alt="" />
    </div> 
    <div className='five'>
     <img src={Imga5} alt="" />
    </div> 
    <div className='six'>
     <img src={Imga5} alt="" />
    </div> 
    <div className='seven'>
     <img src={Imga4} alt="" />
    </div> 
    <div className='eight'>
     <img src={Imga3} alt="" />
    </div> 
    <div className='nine'>
     <img src={Imga2} alt="" />
    </div> 
    <div className='ten'>
     <img src={Imga} alt="" />
    </div> 
  </>
  )
}

export default Home