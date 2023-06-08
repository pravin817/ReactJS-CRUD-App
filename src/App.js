import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListEmployee from "./Components/ListEmployee";
import AddEmployee from "./Components/AddEmployee";
import EditEmployee from "./Components/EditEmployee";
import EmployeeDetail from "./Components/EmployeeDetail";

function App() {
  return (
    <div className="App">
      <h2 className="title">React JS CRUD Operations</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListEmployee />}></Route>
          <Route path="/employee/add" element={<AddEmployee />}></Route>
          <Route
            path="/employee/detail/:empid"
            element={<EmployeeDetail />}
          ></Route>
          <Route
            path="/employee/edit/:empid"
            element={<EditEmployee />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
