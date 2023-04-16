import { useContext } from "react";
import { SecureAppContext } from "../../context/SecureAppContext";
import Button from "react-bootstrap/Button";

const Dashboard = () => {
  const { title, loggedIn } = useContext(SecureAppContext);
  console.log(loggedIn);
  return (
    <div>
      <Button />
    </div>
  );
};

export default Dashboard;
