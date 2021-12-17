import "./App.css";
import Home from "./Component/Home";
import Menubar from "./Component/Menubar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddCatagory from "./Component/AddCatagory";
import { useState } from "react";

function App() {

const [parent,setParent]=useState("")
const [catagory,setCatagory]=useState("")


  return (
    <div className="App">
      <BrowserRouter>
        <Menubar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addCatagory">
            <AddCatagory setCatagory={setCatagory} setParent={setParent} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
