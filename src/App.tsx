
import './App.css'
import unit1 from './data/latin/unit1'

function App() {

  const lang = unit1;


  return (
    <>
      <h1>Welcome!</h1>
      <h3>Please Pick a Language:</h3>
      <h4>Test</h4>

      <div>
        {lang.map(phrase => {
          return (
            <div>{phrase.phrase}</div>
          )
        })}
      </div>
    </>
  )
}

export default App
