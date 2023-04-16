import { SecureAppContext } from "./context/SecureAppContext";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  const [title, setTitle] = React.useState("welcome");
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <SecureAppContext.Provider value={{ title: title, loggedIn: loggedIn }}>
      <div className="App">
        <Router>
          {loggedIn ? (
            <Routes>
              <Route Component={Dashboard} path="/" />
            </Routes>
          ) : (
            <Routes>
              <Route Component={Landing} path="/" />
            </Routes>
          )}
        </Router>
      </div>
    </SecureAppContext.Provider>
  );
}

export default App;
