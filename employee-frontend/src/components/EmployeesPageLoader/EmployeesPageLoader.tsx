import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeById } from "../services/employees";
import { Employee } from "../services/types";
import EmployeeForm from "../EmployeeForm/EmployeeForm";

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
            {!loading && employee && <EmployeeForm employee={employee} />}
            {!loading && error && <p>{error.message}</p>}
        </>
    );
};
export default EmployeesPageLoader;
