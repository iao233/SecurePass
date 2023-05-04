import { SecureAppContext } from "./context/SecureAppContext";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import {
  connectingWithContract,
  CheckIfWalletConnected,
  connectWallet,
} from "./api/contractConnectivity";

function App() {
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState("");
  const [passwords, setPasswords] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const contract = await connectingWithContract();

      const connectAccount = await connectWallet();
      setAccount(connectAccount);
      console.log(connectAccount);
      // const email = await contract.getUsername(connectAccount);
      // console.log('email', email);
      
      // const passwordList = await contract.getMyPasswords();
      // console.log('passwordList', passwordList);
      // setPasswords(passwordList);
    } catch (err) {
      setError("Please Install and Connect Your Wallet");
    }
  };

  const createAccount = async ({
    email,
    name,
    securePassword,
    accountAddress,
  }) => {
    try {
      if (email || securePassword || name || accountAddress) {
        return setError("Missing fields");
      }

      const contract = await connectingWithContract();
      const getCreatedUser = await contract.createAccount(
        email,
        name,
        securePassword
      );
      setLoading(true);
      await getCreatedUser.wait();
      setLoading(false);
      window.location.reload();
    } catch (error) {
      setError("Error while creating your account. Please reload browser.");
    }
  };

  const addPassword = async ({
    topic,
    username,
    passwordVal,
    accountAddress,
  }) => {
    try {
      if (topic || username || passwordVal || accountAddress)
        return setError("Missing fields");

      const contract = await connectingWithContract();
      const addMyPassword = await contract.addPassword(
        topic,
        username,
        passwordVal
      );
      setLoading(true);
      await addMyPassword.wait();
      setLoading(false);
      window.location.reload();
    } catch (err) {
      setError("Something went wrong adding password.");
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <SecureAppContext.Provider value={{ account: account, fetchData: fetchData }}
    >
      <div className="App">
        <Router>
          {account ? (
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
