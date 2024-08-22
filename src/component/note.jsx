import { forwardRef } from "react"

export const Note = forwardRef(({key,
  initialPos,
  content,...props},ref)=>{

   return(
     <div 
      key={key} 
      ref={ref}
      style={{
        position:"absolute",
        left:`${initialPos?.x}px`,
        top:`${initialPos?.y}px`,
        border:"2px solid black",
        userSelect:"none",
        padding:"10px",
        width:"200px",
        cursor:"move",
        backgroundColor:"lightyellow",
      }}
      {...props}
      >📌 {content}</div>     
    )       
  })
