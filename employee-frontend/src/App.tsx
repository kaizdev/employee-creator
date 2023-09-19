import { useState } from "react";
import "./App.css";
import RefreshContextProvider from "./components/context/RefreshContextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import EmployeesList from "./containers/EmployeesList";
import FetchEmployees, {
    Employee,
} from "./components/FetchEmployees/FetchEmployees";
import EmployeesPageLoader from "./components/EmployeesPageLoader/EmployeesPageLoader";
import EmployeeForm from "./components/EmployeeForm/EmployeeForm";

function App() {
    const [employees, setEmployees] = useState<Employee[]>([]);

    return (
        <RefreshContextProvider>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route
                        path="/"
                        element={<EmployeesList employees={employees} />}
                    />
                    <Route
                        path="/add-employee"
                        element={<EmployeeForm employee={null} />}
                    />
                    <Route
                        path="employees/:id"
                        element={<EmployeesPageLoader />}
                    />
                </Routes>
                <FetchEmployees setEmployees={setEmployees} />
            </BrowserRouter>
        </RefreshContextProvider>
    );
}

export default App;
