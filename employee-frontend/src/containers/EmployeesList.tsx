import EmployeeComponent from "../components/Employee/Employee";
import { Employee } from "../components/FetchEmployees/FetchEmployees";

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
                <p>Add employee button</p>
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
