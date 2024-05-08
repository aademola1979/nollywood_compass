import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState()

  useEffect(()=>{
    async()=>{
      const response = await axios.get('http://localhost:4000/blogs')
      setData(response.json())}
   
  },[])

  console.log(data)
 
  




  return (
    <> 
      <div className="flex justify-center items-center min-h-screen">
        <h1>Hi</h1>

      </div>
    </>
  )
}

export default App
