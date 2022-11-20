import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  creature: Props["creature"];
  setCreature: React.Dispatch<React.SetStateAction<Props["creature"]>>;
}

const AddToList: React.FC<IProps> = ({ setCreature, creature }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    elements: "",
    url: "",
    series: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.url) return;

    setCreature([
      ...creature,
      {
        name: input.name,
        age: parseInt(input.age),
        elements: input.elements,
        url: input.url,
        series: input.series,
        note: input.note,
      },
    ]);
    setInput({
      name: "",
      age: "",
      elements: "",
      url: "",
      series: "",
      note: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="Elements"
        className="AddToList-input"
        value={input.elements}
        onChange={handleChange}
        name="elements"
      />
      <input
        type="text"
        placeholder="Image"
        className="AddToList-input"
        value={input.url}
        onChange={handleChange}
        name="url"
      />
      <input
        type="text"
        placeholder="Series"
        className="AddToList-input"
        value={input.series}
        onChange={handleChange}
        name="series"
      />
      <textarea
        placeholder="Note"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
        name="note"
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
