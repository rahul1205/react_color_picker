import React, {useState} from 'react';

const ColorDisplay = (props) => {
	return(
		<>
		<h1 style={{textAlign:"center"}}>Color Picker Widget</h1>
		<div className="display-color" style={{ background:props.bgColor}}></div>
		</>
	)
}

export default ColorDisplay