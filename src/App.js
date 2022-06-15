import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

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
      <Counter/>
      <ClassCounter/>
    </div>
  );
}

export default App;
