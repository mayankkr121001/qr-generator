import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState("");
  const [word, setWord] = useState("random");
  const [color, setColor] = useState("ffffff");
  const [size, setSize] = useState((data) => (window.innerWidth >= 710) ? "300x300": "200x200");

  const [imageUrl, setImageUrl] = useState("");

  
  useEffect(() => {
    
    setImageUrl(`https://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${size}&bgcolor=${color}`)

  }, [color, size, word])

  function onInputValue(e){
    const value = e.target.value;
    setInputText(value);
  }

  function onColor(e){
    const value = e.target.value;
    setColor(value.slice(1));
  }

  function onSize(e){
    const value = e.target.value;
    setSize(`${value}x${value}`);
  }


  function onGenerate(){
    setWord(inputText);
  }
  



  return (
    <div className="container">
      <div className='qrContainer'>
        <h1>QR Generator</h1>
        <div className='inputTextDiv'>
          <input onChange={onInputValue} type="text" placeholder='enter text to encode' />
          <button onClick={onGenerate}>Generate</button>
        </div>
        <div className='colorSizeDiv'>
          <div className="colorDiv">
            <label>Background-Color: </label>
            <input onChange={onColor} type="color" defaultValue="#ffffff" />
          </div>
          <div className="sizeDiv">
            <label>Size: </label>
            {(window.innerWidth >=710)?
            <input onChange={onSize} type="range" min="100" max="400" defaultValue="300" step="1"/>:
            <input onChange={onSize} type="range" min="100" max="250" defaultValue="200" step="1"/>
            }
          </div>
        </div>
        <div className="qrDiv">
          <img src={imageUrl} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
