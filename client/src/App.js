
import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {

  let [data, setData] = useState([])

  const fetchData = async () =>{
    // fetch("https://fakestoreapi.com/products")
    // .then(res=>res.json())
    // .then(data =>{
    //   console.log(data)
    //   setData(data)
    // })
    const data = await axios.get("http://localhost:5000/products")
    console.log(data)
    setData(data.data)
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className="App">
        {
           data.map(val =>{
            return(
                <div>
                  <img height="100px" width="200px" src={val.image}></img>
                  <h1>{val.title}</h1>
                  <p>{val.price}</p>
                  </div>
            
            ) 
           })
        }
    </div>
  );
}

export default App;
