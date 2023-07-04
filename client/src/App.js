
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
    const data = await axios.get("")
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
            return <h1>{val.title}</h1>
           })
        }
    </div>
  );
}

export default App;
