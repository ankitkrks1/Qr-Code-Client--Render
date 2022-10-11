import React,{useState} from 'react'
import { QrReader } from 'react-qr-reader';

const Reader = ({setRes}) => {
    const [data, setData] = useState('No Qr Found');
  return (
    <div>
      
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        Style={{width:'50%',height:'50%'}}
        // ViewFinder = {<p>{data}</p>}
      />
    <h2>{data}</h2>
    </div>
  )
}

export default Reader
