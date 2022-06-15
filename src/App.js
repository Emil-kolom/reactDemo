import React, {useState} from "react";

function App() {
  const [count, setCount] = useState(5);
  const [value, setText] = useState('Text');

  function increment() {
    setCount(count + 1);
  }

    function decrement() {
        setCount(count - 1);
    }

    return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br/>
      <h1>{value}</h1>
      <input
        type={"text"}
        value={value}
        onChange={event => {setText(event.target.value)}}
      />
    </div>
  );
}

export default App;
