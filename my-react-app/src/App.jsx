import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './T.css'; // CSSは別ファイルで定義

const App = () => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const [count, setCount] = useState(0)

  return (
    <>
     <h1>こんにちはkeita</h1>
      <div className="input-container">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="メッセージを入力..."
        className="styled-input"
      />
    </div>
   
    </>
  )
}

export default App
