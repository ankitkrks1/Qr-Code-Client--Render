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
      <h2>Generate or Read Qr - Quick Response Code</h2>
      <hr></hr>
      <textarea style={{margin:'5%'}} placeholder={txt} onChange={(e)=>setTxt(e.target.value)}></textarea>

      <Gen txt={txt}/>
      <hr></hr>
      <button className='btn' onClick={()=>setRead(!read)} > {read ? 'Stop Reading' : 'Read QR'} </button>
      { read && <Reader/> }

      <ul>
        <li>Can be use to share text between devices like - links</li>
        <li>Share some import text which human's can't read on the go</li>
        <a href='https://en.wikipedia.org/wiki/QR_code'>Qr-WikiPedia</a>
      </ul>
      <hr></hr>
      <p>This Reactjs Page is desinged and managed by Mr. Ankit K Kashyap</p>
    </div>
  );
}

export default App;
