import React from "react"

function Keypad (){
    // console.log("Entering password ...")
     return(
         <input onChange= {()=>console.log("Entering password...")} type="password" />
     )

}





export default Keypad;