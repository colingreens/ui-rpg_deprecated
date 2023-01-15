import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import User from "./assets/user/pages/User";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
