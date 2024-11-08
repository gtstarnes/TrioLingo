
import { useState } from 'react';
import './App.css'
import unit1 from './data/latin/unit1'

function App() {

  const lang = unit1;
  const [flipped, setFlipped] = useState<boolean>(false)

  const toggleWord = () => {
    setFlipped(!flipped)
  }

  return (
    <>
      <h1>Welcome!</h1>
      <h3>Please Pick a Language:</h3>
      <h4>Test</h4>

      <div>
        {lang.map(phrase => {
          return (
            <div>
              <p>{flipped ? phrase.phrase: phrase.answer}</p>
              <div>
                <button>Right</button>
                <button onClick={toggleWord}>Flip</button>
                <button>Wrong</button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
