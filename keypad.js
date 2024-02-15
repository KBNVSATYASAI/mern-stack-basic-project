import React from 'react';

export default function Keypad({ handleclick, handleclear, calculate }) {
  return (
    <div >
      <div>
        <button onClick={() => { handleclick("7") }} style={{ width: '85px', height: '90px', fontSize: '26px', cursor: 'pointer', border: 'none', borderTop: '1px solid #666', borderRight: '1px solid #666' ,borderRadius:'50%'}}>7</button>
        <button onClick={() => { handleclick("8") }} style={{ width: '85px', height: '90px', fontSize: '26px', cursor: 'pointer', border: 'none', borderTop: '1px solid #666', borderRight: '1px solid #666' ,borderRadius:'50%'}}>8</button>
        <button onClick={() => { handleclick("9") }} style={{ width: '85px', height: '90px', fontSize: '26px', cursor: 'pointer', border: 'none', borderTop: '1px solid #666', borderRight: '1px solid #666',borderRadius:'50%' }}>9</button>
        <button onClick={() => {  handleclick('/') }} style={{ width: '85px', height: '90px', fontSize: '26px', cursor: 'pointer', border: 'none', borderTop: '1px solid #666', borderRight : 'none'  , borderRadius:'50%',backgroundColor:"orange"}}>/</button>
      </div>
      <div>
        <button onClick={() => { handleclick("4") }} style={{ width: '85px', height: '90px', fontSize: '26px', cursor: 'pointer', border: 'none', borderTop: '1px solid #666', borderRight: '1px solid #666',borderRadius:'50%' }}>4</button>
        <button onClick={() => { handleclick("5") }} style={{ width: '85px', height: '90px', fontSize: '26px', cursor: 'pointer', border: 'none', borderTop: '1px solid #666', borderRight: '1px solid #666' ,borderRadius:'50%'}}>5</button>
        <button onClick={() => { handleclick("6") }} style={{ width: '85px', height: '90px', fontSize: '26px', cursor: 'pointer', border: 'none', borderTop: '1px solid #666', borderRight: '1px solid #666',borderRadius:'50%' }}>6</button>
        <button onClick={() => {  handleclick("*") }} style={{ width: '85px', height: '90px', fontSize: '26px', cursor: 'pointer', border: 'none', borderTop: '1px solid #666', borderRight: 'none' , backgroundColor:"orange",borderRadius:'50%'}}>*</button>
      </div>
      <div>
        <button onClick={() => { handleclick("1") }} style={{ width: '85px', height: '90px', fontSize: '26px', cursor: 'pointer', border: 'none', borderTop: '1px solid #666', borderRight: '1px solid #666',borderRadius:'50%' }}>1</button>
        <button onClick={() => { handleclick("2") }} style={{ width: '85px', height: '90px', fontSize: '26px', cursor: 'pointer', border: 'none', borderTop: '1px solid #666', borderRight: '1px solid #666' ,borderRadius:'50%'}}>2</button>
        <button onClick={() => { handleclick("3") }} style={{ width: '85px', height: '90px', fontSize: '26px', cursor: 'pointer', border: 'none', borderTop: '1px solid #666', borderRight: '1px solid #666',borderRadius:'50%' }}>3</button>
        <button onClick={() => {  handleclick("-") }} style={{ width: '85px', height: '90px', fontSize: '26px', cursor: 'pointer', border: 'none', borderTop: '1px solid #666', borderRight: 'none'  ,backgroundColor:"orange",borderRadius:'50%'}}>-</button>
      </div>
      <div>
        <button onClick={() => { handleclick("0") }} style={{ width: '85px', height: '90px', fontSize: '26px', cursor: 'pointer', border: 'none', borderTop: '1px solid #666', borderRight: '1px solid #666' ,borderRadius:'50%'}}>0</button>
        <button onClick={() => { calculate() }} style={{ width: '85px', height: '90px', fontSize: '26px', cursor: 'pointer', border: 'none', borderTop: '1px solid #666', borderRight: '1px solid #666' ,borderRadius:'50%'}}>=</button>
        <button onClick={() => { handleclear() }} style={{ width: '85px', height: '90px', fontSize: '26px', cursor: 'pointer', border: 'none', borderTop: '1px solid #666', borderRight: '1px solid #666' ,borderRadius:'50%'}}>C</button>
        <button onClick={() => {  handleclick("+") }} style={{ width: '85px', height: '90px', fontSize: '26px', cursor: 'pointer', border: 'none', borderTop: '1px solid #666', borderRight: 'none' , backgroundColor:"orange" ,borderRadius:'50%'}}>+</button>
      </div>
    </div>
  );
}
