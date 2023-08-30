import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../services/employees";
import { useContext, useState } from "react";
import { RefreshContext } from "../context/RefreshContextProvider";

const AddEmployees = () => {
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
        reset,
    } = useForm({ resolver: yupResolver(schema) });

    const formSubmit = async (formData: any) => {
        console.log("Form Data", formData);
        try {
            const employee = await createEmployee(formData);
            console.log(employee);
            setRefresh(refresh + 1);
            navigate("/");
        } catch (e) {
            setError(true);
            console.log(e);
        }
    };

    return (
        <>
            <h2 className="text-xl font-medium text-purple-600">
                Use this form to add a new employee
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
                    {errors.firstName && errors.firstName.message}

                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        type="text"
                        className="border rounded-md focus:border-blue-500 w-64 mb-4"
                        {...register("lastName")}
                    />
                    {errors.lastName && errors.lastName.message}

                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        className="border rounded-md focus:border-blue-500 w-64 mb-4"
                        {...register("email")}
                    />

                    <label htmlFor="mobile">Mobile</label>
                    <input
                        type="text"
                        className="border rounded-md focus:border-blue-500 w-64 mb-4"
                        {...register("mobile")}
                    />
                    {errors.mobile && errors.mobile.message}

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

                    <label htmlFor="address">Address</label>
                    <input
                        id="address"
                        type="text"
                        className="border rounded-md focus:border-blue-500 w-64 mb-4"
                        {...register("address")}
                    />

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

                    <label htmlFor="startDate">Start Date</label>
                    <input
                        type="date"
                        className="border rounded-md focus:border-blue-500 w-64 mb-4"
                        {...register("startDate")}
                    />

                    <label htmlFor="finishDate">Finish Date</label>
                    <input
                        type="date"
                        className="border rounded-md focus:border-blue-500 w-64 mb-4"
                        {...register("finishDate")}
                    />
                </div>

                <div>
                    <button type="submit">Create New Employee</button>
                </div>
            </form>
            {error && <p>Error: Could not create new employee</p>}
        </>
    );
};
export default AddEmployees;
