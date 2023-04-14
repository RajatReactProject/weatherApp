import React, { useState } from 'react';

function Location() {
    const[lat,setLat] = useState("0");
    const[long,setLong] = useState("0");
    const[hemisphere,setHemisphere] = useState("0");
    const[month,setMonth] = useState("0");

    function getCurrentLocation(){
        navigator.geolocation.getCurrentPosition((position)=>{
            let {latitude,longitude} = position.coords;
            setLat(latitude);
            console.log(latitude);
            setLong(longitude);
            
        });
        if(lat>0){
            setHemisphere("Northern Hemisphere");
        }
        else if(lat<0){
            setHemisphere("Southern Hemisphere");
        }
        else{
            setHemisphere("Equator");
        }

        // get current month;
        let date = new Date();
        let currentMonth = date.getMonth();
        setMonth(currentMonth);
        var loc = `https://maps.google.com/maps?q=${lat},${long}&z=15&output=embed`;
        console.log(loc);
        }
  return (
    <div>
        <h1>Latitude: {lat}</h1>
        <h1>Longitude : {long}</h1>
        <h1>Hemisphere : {hemisphere}</h1>
        <h1>Month : {month}</h1>
        <button onClick={() => {getCurrentLocation()}}>Get My Location</button>
        {/*<iframe src= {loc} width="100%" height="650" frameborder="0"></iframe>*/}
        
        
    </div>
  )
}

export default Location;