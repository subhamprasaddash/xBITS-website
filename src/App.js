import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Switch } from "react-router";
import Home from "./Components/Home/Home";
import docLogin from "./Components/Authentication/Login/docLogin";
import clientLogin from "./Components/Authentication/Login/clientLogin";
import techLogin from "./Components/Authentication/Login/techLogin";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" element={Home} />
          <Route path="/docLogin" element={docLogin} />
          <Route path="/clientLogin" element={clientLogin} />
          <Route path="/techLogin" element={techLogin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
