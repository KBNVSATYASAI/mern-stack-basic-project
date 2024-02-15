import React, { useState } from 'react'
  
import Keypad from './keypad'
export default function  Main() {

  const [input,setInput] = useState('');
function handleclick(value) {
  setInput(input+value)
}

function calculate (value) {
  const outputval = eval(input)
  setInput(outputval)
}

function handleclear () {
  setInput(" ")
}
  return (
    <center ><div style={{display:'flex' , justifyContent:'center', alignContent:'center', height:'100vh' , flexDirection:'column' }}> 
    <h1 style={{color:'red'}}>BaluRamu's calculator</h1>
    <div  > <input value={input} style={{height:'90px' , width:'335px' ,color:'white' , backgroundColor:'black' ,textAlign:'right' ,outline:'none' , border:'none' , fontSize:'32px' , padding:'2px , 20px' , borderTopLeftRadius:'6px' , borderTopRightRadius:'6px'}} type='text' /></div>
       <Keypad handleclick={handleclick} calculate={calculate} handleclear={handleclear}> </Keypad>
  </div></center>
  )
}
