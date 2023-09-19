import { useContext } from "react";
import { deleteEmployees } from "../services/deleteEmployees";
import { RefreshContext } from "../context/RefreshContextProvider";
import { Link } from "react-router-dom";
import {
    At,
    Briefcase,
    DeviceMobile,
    FlagCheckered,
    Hourglass,
    ListNumbers,
    MapPin,
    Play,
} from "@phosphor-icons/react";
import { EmployeeProps } from "../services/types";

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
        partTimeHours,
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
            <div className="grid grid-rows-1 grid-cols-6">
                <div></div>
                <div className="flex flex-col items-start col-start-3 col-span-5">
                    <div className="flex items-center mb-2">
                        <div className="w-6 text-center">
                            <ListNumbers className="mr-2" />
                        </div>
                        {id}
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-6 text-center">
                            <At className="mr-2" />
                        </div>
                        {email}
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-6 text-center">
                            <DeviceMobile className="mr-2" />
                        </div>
                        {mobile}
                    </div>
                    <div className="flex items-center mb-2">
                        <MapPin className="mr-2" />
                        {address}
                    </div>
                    <div className="flex items-center mb-2">
                        <Briefcase className="mr-2" />
                        {employmentType}
                    </div>

                    <div className="flex items-center mb-2">
                        <Hourglass className="mr-2" />
                        {employmentHours === "PART_TIME"
                            ? `${employmentHours}: ${partTimeHours} hours/week`
                            : employmentHours}
                    </div>

                    <div className="flex items-center mb-2">
                        <Play className="mr-2" />
                        {startDate.toString()}
                    </div>

                    <div className="flex items-center mb-2">
                        <FlagCheckered className="mr-2" />
                        {finishDate ? (
                            <span>Finish date: {finishDate.toString()}</span>
                        ) : (
                            "Not applicable"
                        )}
                    </div>
                </div>
                <div></div>
            </div>

            <br />
            <div className="flex flex-row">
                <div className="mx-auto bg-blue-600 rounded-full bg-blue w-40 text-white">
                    <Link to={`employees/${id}`}> Edit Employee</Link>
                </div>
                <div className="mx-auto bg-red-600 rounded-full bg-red w-40 text-white">
                    <button onClick={handleDelete}>Delete Employee</button>
                </div>
            </div>
        </div>
    );
};
export default Employee;
