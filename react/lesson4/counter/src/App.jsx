import React from "react";
import Counter from "./Counter.jsx";

const App = () => {
  return (
    <>
      <Counter start={17} interval={1000}/>
      <Counter start={18} interval={1500}/>
      <Counter start={19} interval={2000}/>
    </>

  )
}

export default App;