import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./schema.ts";
import { useNavigate } from "react-router-dom";
import { createEmployee, updateEmployee } from "../services/employees";
import { useContext, useState } from "react";
import { RefreshContext } from "../context/RefreshContextProvider";
import { Employee } from "../services/types.ts";
import ErrorMessage from "../ErrorMessage/ErrorMessage.tsx";

interface EmployeeFormProps {
    employee: Employee | null;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ employee }) => {
    // required to avoid the TS error due to the possible null value
    const refreshContext = useContext(RefreshContext);

    if (!refreshContext)
        throw new Error(
            "RefreshContext must be used within a RefreshContextProvider"
        );
    const { refresh, setRefresh } = refreshContext;

    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: employee || {},
    });

    const formSubmit = async (formData: any) => {
        console.log("Form Data", formData);
        try {
            if (employee) {
                await updateEmployee(formData, employee.id);
            } else {
                await createEmployee(formData);
            }
            setRefresh(refresh + 1);
            navigate("/");
        } catch (e) {
            setError(true);
            console.log(e);
        }
    };

    const selectedEmploymentHours = watch("employmentHours", "");

    return (
        <>
            <h2 className="text-xl font-medium text-purple-600">
                {employee
                    ? "Update the employee details"
                    : "Use this form to add a new employee"}
            </h2>
            <form onSubmit={handleSubmit(formSubmit)}>
                <div className="flex flex-col items-start">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        type="text"
                        className="border rounded-md focus:border-blue-500 w-64 mb-4 mt-2"
                        {...register("firstName")}
                    />
                    <ErrorMessage error={errors.firstName} />

                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        type="text"
                        className="border rounded-md focus:border-blue-500 w-64 mb-4"
                        {...register("lastName")}
                    />
                    <ErrorMessage error={errors.lastName} />

                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        className="border rounded-md focus:border-blue-500 w-64 mb-4"
                        {...register("email")}
                    />
                    <ErrorMessage error={errors.email} />

                    <label htmlFor="mobile">Mobile</label>
                    <input
                        id="mobile"
                        type="text"
                        className="border rounded-md focus:border-blue-500 w-64 mb-4"
                        {...register("mobile")}
                    />
                    <ErrorMessage error={errors.mobile} />

                    <label htmlFor="employmentType">Employment Type</label>
                    <select
                        id="employmentType"
                        className="border rounded-md focus:border-blue-500 w-64 mb-4"
                        {...register("employmentType")}
                    >
                        <option value="" disabled>
                            SELECT ONE
                        </option>
                        <option value="CONTRACT">CONTRACT</option>
                        <option value="PERMANENT">PERMANENT</option>
                    </select>
                    <ErrorMessage error={errors.employmentType} />

                    <label htmlFor="address">Address</label>
                    <input
                        id="address"
                        type="text"
                        className="border rounded-md focus:border-blue-500 w-64 mb-4"
                        {...register("address")}
                    />
                    <ErrorMessage error={errors.address} />

                    <label htmlFor="employmentHours">Employment Hours</label>
                    <select
                        id="employmentHours"
                        className="border rounded-md focus:border-blue-500 w-64 mb-4"
                        {...register("employmentHours")}
                    >
                        <option value="" disabled>
                            SELECT ONE
                        </option>
                        <option value="FULL_TIME">FULL TIME</option>
                        <option value="PART_TIME">PART TIME</option>
                    </select>
                    <ErrorMessage error={errors.employmentHours} />

                    {selectedEmploymentHours === "PART_TIME" && (
                        <>
                            <label htmlFor="partTimeHours">
                                Part Time Hours
                            </label>
                            <input
                                id="partTimeHours"
                                type="text"
                                className="border rounded-md focus:border-blue-500 w-64 mb-4"
                                {...register("partTimeHours")}
                            />
                            <ErrorMessage error={errors.partTimeHours} />
                        </>
                    )}

                    <label htmlFor="startDate">Start Date</label>
                    <input
                        id="startDate"
                        type="date"
                        className="border rounded-md focus:border-blue-500 w-64 mb-4"
                        {...register("startDate")}
                    />
                    <ErrorMessage error={errors.startDate} />

                    <label htmlFor="finishDate">Finish Date</label>
                    <input
                        id="finishDate"
                        type="date"
                        className="border rounded-md focus:border-blue-500 w-64 mb-4"
                        {...register("finishDate")}
                    />
                    <ErrorMessage error={errors.finishDate} />
                </div>

                <div>
                    <button
                        type="submit"
                        className="mx-auto bg-green-600 rounded-full bg-green w-40 text-white"
                    >
                        {employee ? "Update Employee" : "Create New Employee"}
                    </button>
                </div>
            </form>
            {error && (
                <p className="text-red-500">
                    Error: Could not create new employee or update existing
                    employee
                </p>
            )}
        </>
    );
};
export default EmployeeForm;
