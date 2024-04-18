import { useState } from 'react'

import { FaStar } from 'react-icons/fa'
import './style.css'
export default function StarRatingApp({ numberOfStars = 10 }) {
  const [count, setCount] = useState(0)
  const [rating, setRatting] =useState(0)
  const [hover, setHover]= useState(0)

  function handleOnClick(getIndex) {
    setRatting(getIndex)
    console.log("handleOnClick",getIndex)
  }
  function handleOnMove(getIndex) {
    setHover(getIndex)
  }
  function handleOnLeave(getIndex) {
   setHover(rating)
  }
  return (
  
    <> 
      
      <div className="star-rating">
        {
       
        
          [...Array(numberOfStars)].map((_, index) => {
             index += 1;
            return <FaStar
            className={index <=(rating || hover) ? 'active' : 'inactive' }
            key={index}
            
            onClick={()=>{handleOnClick(index)}}
            onMouseMove={()=>handleOnMove(index)}
            onMouseLeave={()=>handleOnLeave(index)}
            size={40}
            
            
            />
           
          })
        }
      </div>
      {/* <div className="container" 
       
       style={

        {
          background:"black",
          // width:"100vw",
          // height:"100vh",
          display:"flex",
          justifyContent:"center"
        }
        
       }
   
       >
        <h3 style={{
          color:"white"
        }}>
         
          Hey! This is Star rating App</h3>
        

       </div> */}
    </>
  )
}



