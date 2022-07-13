import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="TrafficLight row d-flex-justify-content-between mx-3 mt-3" style={{"height":"300px","width":"80px","backgroundColor":"black","borderRadius":"15px"}}>
			<div className="GreenLight mx-3" style={{"height":"50px","marginTop":"30px", "width":"50px","backgroundColor":"green","borderRadius":"25px"}}></div>
			<div className="YellowLight mx-3" style={{"height":"50px","width":"50px","backgroundColor":"yellow","borderRadius":"25px"}}></div>
			<div className="RedLight mx-3"style={{"height":"50px","width":"50px","backgroundColor":"red","borderRadius":"25px"}}></div>
		</div>
	);
};

export default Home;
