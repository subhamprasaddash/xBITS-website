import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Switch } from "react-router";
import Home from "./Components/Home/Home";
import DocLogin from "./Components/Authentication/Login/docLogin";
import ClientLogin from "./Components/Authentication/Login/clientLogin";
import TechLogin from "./Components/Authentication/Login/techLogin";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" element={Home} />
          <Route path="/docLogin" element={DocLogin} />
          <Route path="/clientLogin" element={ClientLogin} />
          <Route path="/techLogin" element={TechLogin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
