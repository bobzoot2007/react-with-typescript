import React, { useState } from "react";
import "./App.css";
import List from "./components/List";

interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Oliver Ray",
      url: "https://pps.whatsapp.net/v/t61.24694-24/205663138_1139058829905645_8454034704936361956_n.jpg?ccb=11-4&oh=72a1cc0ddae2a6943d87234d7eea75c0&oe=60DFEEFD",
      age: 14,
      note: "Old school friend of mine",
    },
  ]);

  return (
    <div className="App">
      <h1>People invited to the party</h1>
      <List people={people} />
    </div>
  );
}

export default App;
