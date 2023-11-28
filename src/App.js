import "./App.css";
import { adatlist } from "./adatok.js";
import Kep from "./komponens/kep";
import React, { useState } from "react";

function App() {

    const [kepIndex, setNagykep] = useState(0);

    function nagykepCsere(id){
      console.log("nagykep csere", id)
      setNagykep(id)
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kepgalleria</h1>
      </header>
      <article>
        <div className="fokep">
          <h3>Kep cim</h3>
          <Kep adat={adatlist[kepIndex]} />
          <p>leiras, info</p>
        </div>
        <div className="galeria">
          {
            adatlist.map( (elem, index) => {
              return <Kep adat={elem} key={index} nagykepCsere={nagykepCsere} />
            })
          }
        
        </div>
      </article>
      <footer>
        <p>Vegi Daniel Mark</p>
      </footer>
    </div>
  );
}

export default App;
