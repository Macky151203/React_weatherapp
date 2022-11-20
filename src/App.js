import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';



function App() {

  const[data , setdata]= useState({});
  const[location,setlocation]= useState('');
  

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d79c9ef4ac8d617db80f6721f9919f20`;

  const searchlocation= (event) =>{
    if(event.key==='Enter'){
    axios.get(url).then((response)=>{
       

      
      setdata(response.data)
      
      console.log(response.data)
      
    })
    setlocation('');
    }
  }
//   useEffect(()=>{
//     fetch(url)
     
//     .then(result=> {
//       setdata(result)
//       console.log(data);
//     })
    
    
// },[location]);

  

  return (
    <div className="main">
      <div className='search'>
        <input className='input'   type='text' placeholder='Enter the city name-'  value={location} onChange={event=>setlocation(event.target.value)} onKeyPress={searchlocation}/>
      </div>
      <div className="cont">
        <div className="top">
            <div className="location">{data.name}</div>
            <div id='temp' className="temp">{data.main? <h1>{data.main.temp} </h1>: null}</div>
            <div className="desc">{data.weather? <span>{data.weather[0].main} </span>: null} </div>
        </div>
        <div className='b'>
        <div className="bottom">
            <div className="feels">feels like- {data.main? <span>{data.main.feels_like} </span>: null} </div>
            <div className="humidity">Humidity- {data.main? <span>{data.main.humidity} </span>: null}</div>
            <div className="wind">Wind speed- {data.wind? <span>{data.wind.speed} KMh</span>: null}</div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
