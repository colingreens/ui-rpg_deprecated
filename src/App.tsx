import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import User from "../src/user/pages/User";
import "./App.css";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

function App() {
  return (
    <Router>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
