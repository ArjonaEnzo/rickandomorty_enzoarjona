import { useState } from "react";

export default function SearchBar({ onSearch }) {
  function random() {
    let num = Math.floor(Math.random() * 826);
    onSearch(num);
  }

  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId([event.target.value]);
  };
  const handleOnSearch = () => {
    onSearch(id);
  };
  return (
    <div>
      <input type="search" value={id} onChange={handleChange} />
      <button onClick={handleOnSearch}>Agregar</button>
      <button onClick={random}>Random</button>
    </div>
  );
}
