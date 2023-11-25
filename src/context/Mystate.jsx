import Context from "./Mycontext";
import React from 'react'

const Mystate = (props) => {
    const[mode,setMode] = React.useState('light')
    const toggle =()=>{
        if(mode === "light"){
            setMode('dark')
            document.body.style.backgroundColor = "black"
            document.body.style.color = "white"
        }
        else{
            setMode('light')
            document.body.style.backgroundColor = "white"
            document.body.style.color = "black"
        }
    }
    
    return (
    <div>
        <Context.Provider value={{mode,toggle}}>
            {props.children}
        </Context.Provider>
      
    </div>
  )
}

export default Mystate
