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

    // required to avoid the TS error due to the possible null value
    const refreshContext = useContext(RefreshContext);

    if (!refreshContext)
        throw new Error(
            "RefreshContext must be used within a RefreshContextProvider"
        );
    const { refresh, setRefresh } = refreshContext;

    const handleDelete = async () => {
        const isConfirmed = window.confirm(
            "Are you sure you want to delete the selected employee?"
        );
        if (isConfirmed) {
            await deleteEmployees(id);
            console.log("employee deleted");
            setRefresh(refresh + 1);
        } else {
            console.log("Employee deletion cancelled");
        }
    };
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
            <h3 className="text-xl font-bold">
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
            <div className="mx-auto bg-red-600 rounded-full bg-red w-40">
                <button onClick={handleDelete}>Delete Employee</button>
            </div>
        </div>
    );
};
export default Employee;
