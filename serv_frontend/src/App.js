import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const Hello='Hello NodeServ'
  const [state, setState] = useState()

  useEffect(()=>{
    fetch(`http://localhost:8000/?path=${Hello}`).then(res=> res.json()).then((result)=>{
    
    setState(result.path)
    },(error)=>{}
    
    )},[])

    
  return (
    <div className="NodeServ">
     
     {state}

    </div>
  );
}

export default App;
