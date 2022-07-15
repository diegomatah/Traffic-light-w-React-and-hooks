import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [color,setcolor] = useState("GreenLight");
	const [color2,setcolor2] = useState("YellowLight");
	const [color3,setcolor3] = useState("RedLight");

	return (
		<div className="TrafficLight row">
			<div className={color3} onClick = {()=>{
				if (color3 == "RedLight") {
					
					setcolor2("YellowLight"); 
					setcolor ("GreenLight");
					setcolor3("RedLight glow")}
				else {
					{setcolor3 ("RedLight")}
				}
			}} ></div>
			<div className= {color2} onClick = {()=>{
				if (color2 == "YellowLight") {
					setcolor ("GreenLight");
					setcolor3 ("RedLight");
					setcolor2("YellowLight glow")}
				else {
					{setcolor2 ("YellowLight")}
				}
			}} ></div>
			<div className={color} onClick = {()=> {
				if (color == "GreenLight") {
					setcolor3 ("RedLight");
					setcolor2("YellowLight");
					setcolor ("GreenLight glow")} 
				else {
					{setcolor ("GreenLight")
				}}
			} } ></div>
		</div>
	);
};

export default Home;
