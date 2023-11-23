import React, { useEffect, useState } from "react";

const Qoutes = () =>{
    const [qoutes,setQoutes] = useState();
    const [counter,setCounter] = useState();
    const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8b81f14b92msh47598d07a954521p1228a1jsn030354f9d623',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};



//fetch api function

    async function fetchApi(){
    
        try {
            const response = await fetch(url, options);
            const result = await response.json();
           setQoutes(result.content);
        } catch (error) {
            alert(error);
        }
        
    }


   const handleClick = () =>{
    fetchApi();
   }
//useeffect


    return(<>
            <div style={{ borderRadius:"5px", width:"425px", paddingBottom:"1rem" }}>
                <div style={{padding:"5px" , backgroundColor:"white",display: "flex", justifyContent:"center",textAlign:"center",borderRadius:"5px"}}>{qoutes}</div>
            </div>
            <button type= "button" style={{borderRadius:"5px", boxShadow: "none", border:"none", backgroundColor:"white" ,cursor:"pointer"}} 
            onClick={handleClick}>click</button>
    </>);
}

export default Qoutes;  