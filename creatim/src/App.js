import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Item from "./components/Item";

function App() {
  const [items, setItems] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [checked, setChecked] = useState(true);
  let numEl = 8;

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        numEl = numEl + 4;
        getData();
      }
    });

    const getData = async () => {
      const res = await axios.get("/data.json");
      const { data } = res;
      setItems(data.slice(0, numEl));
    };

    getData();
  }, []);

  const checkedHandler = async () => {
    setChecked(!checked);

    if (checked) {
      const res = await axios.get("/data.json");
      const { data } = res;
      setFilterItems(data.slice(0, 4));
    } else {
      setFilterItems([]);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="container">
        <div className="flex-row">
          <h1>Items:</h1>
          <label>
            Filter Items
            <input
              className="form-control"
              type="checkbox"
              value={checked}
              onChange={checkedHandler}
            />
          </label>
        </div>
        <div className="items">
          {filterItems.length !== 0
            ? filterItems.map((item, index) => <Item item={item} key={index} />)
            : items.map((item, index) => <Item item={item} key={index} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
