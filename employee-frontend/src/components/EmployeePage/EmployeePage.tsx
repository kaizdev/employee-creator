import { useContext, useState } from "react";
import { RefreshContext } from "../context/RefreshContextProvider";
import { EmployeeProps } from "../services/types";
import { Link, useNavigate } from "react-router-dom";
import { updateEmployee } from "../services/employees";

const EmployeePage: React.FC<EmployeeProps> = ({ employee }) => {
    const {
        id,
        firstName,
        lastName,
        email,
        mobile,
        employmentType,
        address,
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

    const initialData = {
        ...employee,
    };

    const navigate = useNavigate();

    const [updatedEmployeeData, setUpdatedEmployeeData] = useState(initialData);
    const [error, setError] = useState(false);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        console.log(updatedEmployeeData, "data to send");
        try {
            await updateEmployee(updatedEmployeeData, employee.id);
            setRefresh(refresh + 1);
            navigate("/");
        } catch (e) {
            setError(true);
            console.log(e);
        }
    };

    const handleChange = (e: any) => {
        console.log(e.target.value, "- value");
        console.log(e.target.id, " - this is the id");
        const { id, value } = e.target;
        setUpdatedEmployeeData({ ...updatedEmployeeData, [id]: value });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-start">
                    <p>Employee id: {id}</p>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        type="text"
                        value={updatedEmployeeData.firstName}
                        onChange={handleChange}
                        className="border rounded-md focus:border-blue-500 w-64 mb-4 mt-2"
                    />

                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        type="text"
                        value={updatedEmployeeData.lastName}
                        onChange={handleChange}
                        className="border rounded-md focus:border-blue-500 w-64 mb-4"
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={updatedEmployeeData.email}
                        onChange={handleChange}
                        className="border rounded-md focus:border-blue-500 w-64 mb-4"
                    />

                    <label htmlFor="mobile">Mobile</label>
                    <input
                        id="mobile"
                        type="text"
                        value={updatedEmployeeData.mobile}
                        onChange={handleChange}
                        className="border rounded-md focus:border-blue-500 w-64 mb-4"
                    />

                    <label htmlFor="employmentType">Employment Type</label>
                    <select
                        id="employmentType"
                        value={updatedEmployeeData.employmentType}
                        onChange={handleChange}
                        className="border rounded-md focus:border-blue-500 w-64 mb-4"
                    >
                        <option value="" disabled>
                            SELECT ONE
                        </option>
                        <option value="CONTRACT">CONTRACT</option>
                        <option value="PERMANENT">PERMANENT</option>
                    </select>

                    <label htmlFor="address">Address</label>
                    <input
                        id="address"
                        type="text"
                        value={updatedEmployeeData.address}
                        onChange={handleChange}
                        className="border rounded-md focus:border-blue-500 w-64 mb-4"
                    />

                    <label htmlFor="employmentHours">Employment Hours</label>
                    <select
                        id="employmentHours"
                        value={updatedEmployeeData.employmentHours}
                        onChange={handleChange}
                        className="border rounded-md focus:border-blue-500 w-64 mb-4"
                    >
                        <option value="" disabled>
                            SELECT ONE
                        </option>
                        <option value="FULL_TIME">FULL TIME</option>
                        <option value="PART_TIME">PART TIME</option>
                    </select>

                    <label htmlFor="startDate">Start Date</label>
                    <input
                        id="startDate"
                        value={updatedEmployeeData.startDate}
                        onChange={handleChange}
                        type="date"
                        className="border rounded-md focus:border-blue-500 w-64 mb-4"
                    />

                    <label htmlFor="finishDate">Finish Date</label>
                    <input
                        id="finishDate"
                        value={updatedEmployeeData.finishDate}
                        onChange={handleChange}
                        type="date"
                        className="border rounded-md focus:border-blue-500 w-64 mb-4"
                    />
                    <button
                        type="submit"
                        className="mx-auto bg-blue-600 rounded-full bg-blue w-40 text-white"
                    >
                        Update Employee
                    </button>
                </div>

                <Link to={"/"}>Go back</Link>
            </form>
        </>
    );
};
export default EmployeePage;
