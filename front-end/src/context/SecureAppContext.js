import React, { useState, useEffect } from "react";

import {
  CheckIfWalletConnected,
  connectWallet,
  connectingWithontract,
} from "../api/contractConnectivity";

export const SecureAppContext = React.createContext();

// export const SecureAppProvider = ({ children }) => {
//   const title = "Welcome to SecurePass";

//   return (
//     <SecureAppContext.Provider value={{ title: title }}>
//       {children}
//     </SecureAppContext.Provider>
//   );
// };
