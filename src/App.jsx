import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import User from "./user/pages/User";
import "./App.css";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import CharacterSelect from "./user/pages/CharacterSelect";
import Combat from "./user/pages/Combat";

function App() {
  return (
    <Router>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<User />} />
      </Routes>
      <Routes>
        <Route path="/character" element={<CharacterSelect />} />
      </Routes>
      <Routes>
        <Route path="/:character/combat" element={<Combat />} />
      </Routes>
    </Router>
  );
}

export default App;
