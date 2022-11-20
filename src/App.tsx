import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
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
      name: "LeBron James",
      age: 35,
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Lakers",
    },
    {
      name: "Kevin Durant",
      age: 31,
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png",
      note: "Brooklyn Nets",
    },
    {
      name: "Stephen Curry",
      age: 32,
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png",
      note: "Golden State Warriors",
    },
  ]);

  return (
    <div className="App" style={{ fontSize: "1.5rem", color: "violet" }}>
      <h1>List of people</h1>
      <List people={people} />
      <AddToList setPeople={setPeople} people={people} />
    </div>
  );
}

export default App;
