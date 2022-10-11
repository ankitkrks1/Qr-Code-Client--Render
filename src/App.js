import React ,{useState} from 'react'
import './App.css';
import Gen from './Components/Gen';
import  Reader  from "./Components/Reader";
function App() {
  const [txt,setTxt] = useState('Write your Txt to Generate QR. ')
  const [read,setRead]= useState(false)
  return (
    <div className="App">
      <h1><u>QR Soluion</u></h1>
      <hr></hr>
      <textarea style={{margin:'5%'}} placeholder={txt} onChange={(e)=>setTxt(e.target.value)}></textarea>

      <Gen txt={txt}/>
      <hr></hr>
      <button className='btn' onClick={()=>setRead(!read)} > {read ? 'Stop Reading' : 'Read QR'} </button>
      { read && <Reader/> }
      <hr></hr>
      <p>This Reactjs Page is desinged by Mr. Ankit K Kashyap</p>
    </div>
  );
}

export default App;
