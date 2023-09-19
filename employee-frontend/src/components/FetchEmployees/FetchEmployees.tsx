import { useContext, useEffect } from "react";
import { getAllEmployees } from "../services/employees";
import { RefreshContext } from "../context/RefreshContextProvider";

export interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    address: string;
    employmentType: string;
    employmentHours: string;
    partTimeHours?: number;
    startDate: string;
    finishDate?: string;
}

interface FetchEmployeesProps {
    setEmployees: (employees: Employee[]) => void;
}

const FetchEmployees: React.FC<FetchEmployeesProps> = ({ setEmployees }) => {
    const refreshContext = useContext(RefreshContext);

    if (!refreshContext)
        throw new Error(
            "RefreshContext must be used within a RefreshContextProvider"
        );
    const { refresh } = refreshContext;

    useEffect(() => {
        getAllEmployees().then((res) => {
            setEmployees(res);
        });
    }, [refresh]);
    return null;
};
export default FetchEmployees;
