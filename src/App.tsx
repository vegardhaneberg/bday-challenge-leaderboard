import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import TableComponent from "./components/TableComponent/TableComponent";
import { useState } from "react";
import FormComponent from "./components/FormComponent/FormComponent";

function App() {
  const [pageState, setPageState] = useState<number>(1);

  return (
    <>
      <NavbarComponent setGlobalState={setPageState} />
      <div className="mainWrapper">
        {pageState == 1 && <TableComponent />}
        {pageState == 2 && <FormComponent setGlobalState={setPageState} />}
        {pageState == 3 && <>spiller side</>}
      </div>
    </>
  );
}

export default App;
