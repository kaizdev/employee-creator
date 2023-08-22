import { useContext } from "react";
import { deleteEmployees } from "../services/deleteEmployees";
import { RefreshContext } from "../context/RefreshContextProvider";

interface EmployeeProps {
    employee: {
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        mobile: string;
        address: string;
        employmentType: string;
        employmentHours: string;
        startDate: string;
        finishDate?: string;
    };
}

const Employee: React.FC<EmployeeProps> = ({ employee }) => {
    const {
        id,
        firstName,
        lastName,
        email,
        mobile,
        address,
        employmentType,
        employmentHours,
        startDate,
        finishDate,
    } = employee;

    const { refresh, setRefresh } = useContext(RefreshContext);

    const handleDelete = async () => {
        await deleteEmployees(id);
        console.log("employee deleted");
        setRefresh(refresh + 1);
    };
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
            <h3>
                {firstName} {lastName}
            </h3>
            <p>{id}</p>
            <p>{email}</p>
            <p>{mobile}</p>
            <p>{address}</p>
            <p>{employmentType}</p>
            <p>{employmentHours}</p>
            <p>{startDate}</p>
            <p>{finishDate && <span>Finish date: {finishDate}</span>}</p>
            <br />
            <button onClick={handleDelete}>Delete Employee</button>
        </div>
    );
};
export default Employee;
