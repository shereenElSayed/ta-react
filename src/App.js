import React from 'react';
import Joke from "./Joke"


function App() {
  return (
    <div>
      <Joke question="What’s green and has wheels?" punchLine="Grass! I lied about the wheels."/>
      <Joke question="How do you call it when an egg is on point?" punchLine="Egg zactly!"/>
      <Joke punchLine="A retail store."/>
      <Joke question="Why are frogs so happy?" punchLine="They eat whatever bugs them."/>
    </div>
  );
}

export default App;
