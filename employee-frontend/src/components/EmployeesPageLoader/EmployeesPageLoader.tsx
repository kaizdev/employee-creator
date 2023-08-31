import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeById } from "../services/employees";
import EmployeePage from "../EmployeePage/EmployeePage";
import { Employee } from "../services/types";

const EmployeesPageLoader = () => {
    const { id } = useParams();

    if (!id) {
        throw new Error("Invalid id");
    }

    const [employee, setEmployee] = useState<Employee | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setLoading(true);
        getEmployeeById(+id)
            .then((employee) => setEmployee(employee))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <>
            {!loading && employee && <EmployeePage employee={employee} />}
            {!loading && error && <p>{error.message}</p>}
        </>
    );
};
export default EmployeesPageLoader;
