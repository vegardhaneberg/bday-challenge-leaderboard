import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import TableComponent from "./components/TableComponent/TableComponent";
import FormComponent from "./components/FormComponent/FormComponent";
import PlayersComponent from "./components/PlayersComponent/PlayersComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayerComponent from "./components/PlayerComponent/PlayerComponent";
import BredvidTableComponent from "./components/BredvidTableComponent/BredvidTableComponent";

function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <div className="mainWrapper">
          <Routes>
            <Route path="/" element={<TableComponent />} />
            <Route path="/addchallenge" element={<FormComponent />} />
            <Route path="/players" element={<PlayersComponent />} />
            <Route path="/player/*" element={<PlayerComponent />} />
            <Route path="/bredvid" element={<BredvidTableComponent />} />
            <Route path="*" element={<div>Page not found!</div>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
