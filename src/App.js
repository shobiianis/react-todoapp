
import './App.css';
import { useState } from 'react';

function App() {

  const [prevState, nextState] = useState(1);
  const [prevText, nexttext] = useState("Hello world")

  let increase = () => {

    nextState(prevState + 1);


  }

  let reset = () => {

    nextState(0)

  }

  let nextText = () => {

    nexttext(prevText + " " + "Shoaib Anis")
  }



  return (
    <div className="App">

      <h1>{prevState}</h1>
      <button onClick={increase}>Add+</button>
      <button onClick={reset}>Reset</button>



 
      <div>
        <p>{prevText}</p>
        <button onClick={nextText}>NextText</button>
      </div>


    </div>


  );
}

export default App;
