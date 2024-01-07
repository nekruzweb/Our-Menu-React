import React, { useState } from "react";
import "./App.css";
import Data from "./Data";
import Menu from "./Menu";
import Button from "./Button";

function App() {
  const Arr = ["all", "breakfast", "lunch", "shakes"];

  const [state, setState] = useState(Data);

  const ChangeData = (type) => {
    if (type === "all") {
      setState(Data)
      return
    }
    const NewData = Data.filter((item) => {
      return item.category === type;
    });
    setState(NewData);
  };

  return (
    <section className="section menu">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Button Elem={Arr} FFF={ChangeData} />
      <div className="section-center">
        <Menu Mal={state} />
      </div>
    </section>
  );
}

export default App;
