import React , {useState} from 'react'

function App() {
  const [value , changeValue] = useState(0);
  return (
    <div className="container text-center">
      <div className="Heading font-weight-bold p-5 h1">
        COUNTER - APP
        </div>
        <div className="Display h3 p-4 mb-5">
          {value}
        </div>
        <div className="buttons">
          <button className="btn btn-basic m-2 border-1 border-dark table-hover" onClick={() => changeValue(value + 1)}>Increment</button>
          <button className="btn btn-basic m-2 border-1 border-dark" onClick={() => changeValue(value - 1)}  disabled={value === 0 ? true : false}
           >Decrement</button>
          <button className="btn btn-basic m- border-1 border-dark" onClick={() => changeValue(0)} disabled={value === 0 ? true : false}
         >Reset</button>
        </div>
      </div>
  );
}

export default App;
