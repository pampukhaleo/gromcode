import React, { useState } from "react";
import Clock from "./Clock.jsx";

const App = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button onClick={() => setVisible(!visible)}>Hide world time</button>
      {visible &&
        <div>
          <Clock location={'London'} offset={0} visible/>
          <Clock location={'Kyiv'} offset={2} visible/>
          <Clock location={'New York'} offset={-5} visible/>
        </div>
      }
    </>
  )
}

export default App;