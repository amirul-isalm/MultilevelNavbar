import "./App.css";
import Home from "./Component/Home";
import Menubar from "./Component/Menubar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddCatagory from "./Component/AddCatagory";
import { useState } from "react";
import DynamicPage from "./Component/DynamicPage";

function App() {

const [parent,setParent]=useState("")
const [catagory,setCatagory]=useState("")


  return (
    <div className="App">
      <BrowserRouter>
        <Menubar parent={parent} catagory={catagory} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addCatagory">
            <AddCatagory setCatagory={setCatagory} setParent={setParent} />
          </Route>
          <Route path="/catagory/:name">

<DynamicPage/>

          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
