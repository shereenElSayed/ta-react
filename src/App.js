import React from 'react';
import Joke from "./Joke"


function App() {
  return (
    <div>
      <Joke question="q1" punchLine="L1"/>
      <Joke question="q2" punchLine="L2"/>
      <Joke punchLine="L3"/>
      <Joke question="q4" punchLine="L4"/>
    </div>
  );
}

export default App;
