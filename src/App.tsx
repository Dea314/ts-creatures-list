import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";
import ChimeraImg from "public/img/ChimeraImg.jpg";
import ToramaImg from "public/img/Torama.png";
import MandragoraImg from "public/img/Mandragora.png";

export interface IState {
  creature: {
    name: string;
    age: number;
    elements: string;
    url: string;
    series: string;
    note?: string;
  }[];
}

function App() {
  const [creature, setCreature] = useState<IState["creature"]>([
    {
      name: "Chimera",
      age: 170,
      elements: "fire",
      url: "ChimeraImg",
      series: "Final Fantasy  XIV",
      note: "Final boss of Cutter's Cry",
    },
    {
      name: "Torama",
      age: 131,
      elements: "wind, thunder, ice, water, fire, earth, poison",
      url: "ToramaImg",
      series: "Final Fantasy  XIV",
      note: "Savage predator",
    },
    {
      name: "Mandragora",
      age: 77,
      elements: "earth, ice, wind, water, dark, lightning",
      url: "MandragoraImg",
      series: "Final Fantasy  XIV",
      note: "In the Seventh Umbral Era",
    },
  ]);

  return (
    <div className="App" style={{ fontSize: "1.5rem", color: "violet" }}>
      <h1>List of Creatures</h1>
      <List creature={creature} />
      <AddToList setCreature={setCreature} creature={creature} />
    </div>
  );
}

export default App;
