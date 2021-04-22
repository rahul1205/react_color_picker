import React, {useState} from 'react';

const ColorSelector = (props) => {
	return(
		<div className="box-container">
    	{props.colorList.map((color, index) => (
        <div key={index} style={{background:color}} 
        className={props.bgColor===color ? "box active" : "box"} onClick={() => props.setBg(color)}/>
        ))}
    </div>)
}

export default ColorSelector