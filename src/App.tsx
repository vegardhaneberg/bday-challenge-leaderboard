import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import TableComponent from "./components/TableComponent/TableComponent";
import FormComponent from "./components/FormComponent/FormComponent";
import PlayersComponent from "./components/PlayersComponent/PlayersComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayerComponent from "./components/PlayerComponent/PlayerComponent";
import EditPlayerFormComponent from "./components/EditPlayerFormComponent/EditPlayerFormComponent";
import EditPlayerComponent from "./components/EditPlayerComponent/EditPlayerComponent";

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
            <Route
              path="/rules"
              element={
                <div>
                  <h1 style={{ marginBottom: "2rem" }}>
                    &#127866; Regler &#127866;
                  </h1>
                  <p>
                    Man skal chugge én halvliter pils, én breezer og én shot i
                    valgfri rekkefølge så raskt man kan.
                  </p>
                  <p>
                    Kun tradisjonell traktebong er tillatt, ingen stive
                    varianter (sorry Mads).
                  </p>
                  <p>
                    Breezeren kan være av valgfri smak, men skal chugges rett
                    fra flaske.
                  </p>
                  <p>Shoten må ha minimum 37.5% alkohol.</p>
                  <p>
                    Tiden starter i det første enhet rører leppene og slutter
                    når man har satt ned siste enhet på bord eller gulv.
                  </p>
                </div>
              }
            />
            <Route path="/editplayer" element={<EditPlayerFormComponent />} />
            <Route path="/editplayer/*" element={<EditPlayerComponent />} />
            <Route path="*" element={<div>Page not found!</div>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
