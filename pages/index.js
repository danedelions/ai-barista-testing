import React, { useState } from 'react'
import { useSpeechRecognition } from 'react-speech-kit';
const {Wit, log} = require('node-wit');

const Home = () => {

  const client = new Wit({
    accessToken: 'VCFS4GQ6E35KECTVD63NPIIHHAHK6XZH',
    logger: new log.Logger(log.DEBUG)
  });

  const [value, setValue] = useState('')
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    }
  })

  const messageReturn = client.message[value, {}]

  return(
    <div>
      {
        console.log(client.message([value], {})
        .then((data) => {
          console.log(data)
        })
        )
      };

      <textarea 
        value = {value}
        onChange={(event)=> setValue(event.target.value)}
      />
      <button onMouseDown={listen} onMouseUp={stop}>
        🎤
      </button>

      {listening && <div>Go ahead I'm listening</div>}

      <p>{messageReturn}</p>
   
    </div>
  )
}

export default Home