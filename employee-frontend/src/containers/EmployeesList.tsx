import { UserPlus } from "@phosphor-icons/react";
import EmployeeComponent from "../components/Employee/Employee";
import { Employee } from "../components/FetchEmployees/FetchEmployees";
import { Link } from "react-router-dom";

export interface EmployeesListProps {
    employees: Employee[];
}

const EmployeesList: React.FC<EmployeesListProps> = ({ employees }) => {
    return (
        <>
            <h1 className="text-xl font-medium text-purple-600">
                ACME Employee List
            </h1>

            <div className="flex justify-between">
                <p>
                    Please click on 'Edit' to find more details of each employee
                </p>
                <p>
                    <Link to="/add-employee">
                        <UserPlus size={32} />
                    </Link>
                </p>
            </div>

            <div>
                {employees.length > 0 &&
                    employees.map((employee) => {
                        return (
                            <EmployeeComponent
                                key={employee.id}
                                employee={employee}
                            />
                        );
                    })}
            </div>
        </>
    );
};
export default EmployeesList;
