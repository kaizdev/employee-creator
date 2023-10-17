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
            <p>Total number of employees: {employees.length}</p>

            <div className="flex justify-between">
                <p>Edit or delete employees below</p>
                <p>
                    <Link to="/add-employee">
                        <UserPlus size={32} />
                    </Link>
                </p>
            </div>

            <div>
                {employees.length > 0 &&
                    employees.map((employee) => {
                        const convertedStartDate = new Date(employee.startDate);
                        const convertedFinishDate = employee.finishDate
                            ? new Date(employee.finishDate)
                            : undefined;
                        const updatedEmployee = {
                            ...employee,
                            startDate: convertedStartDate,
                            finishDate: convertedFinishDate,
                        };
                        return (
                            <EmployeeComponent
                                key={updatedEmployee.id}
                                employee={updatedEmployee}
                            />
                        );
                    })}
            </div>
        </>
    );
};
export default EmployeesList;
