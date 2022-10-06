// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Switch } from "react-router";
// import Home from "./Components/Home/Home";
// import DocLogin from "./Components/Authentication/Login/docLogin";
// import ClientLogin from "./Components/Authentication/Login/clientLogin";
// import TechLogin from "./Components/Authentication/Login/techLogin";
// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Switch>
//           <Route path="/" element={Home} />
// <Route path="/docLogin" element={DocLogin} />
//           <Route path="/clientLogin" element={ClientLogin} />
//           <Route path="/techLogin" element={TechLogin} />
//         </Switch>
//       </Router>
//      <ClientLogin/>

//     </div>
//   );
// }

// export default App;
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ClientLogin from "./Pages/Login/clientLogin";
import DocLogin from "./Pages/Login/docLogin";
import TechLogin from "./Pages/Login/techLogin";
import SignUp from "./Components/Authentication/Register/SignUp";

function App() {
  return (
    <>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <BrowserRouter>
            <Routes>
              <Route path="/client" element={<ClientLogin />} />
              <Route path="/doc" element={<DocLogin />} />
              <Route path="/tech" element={<TechLogin />} />
              <Route path="/register" element={<SignUp />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
