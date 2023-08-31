export const getAllEmployees = async () => {
    // fetch the data
    const response = await fetch("http://localhost:8080/employees");
    return await response.json();
};

export const createEmployee = async (data: any) => {
    const response = await fetch("http://localhost:8080/employees", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Could not create employee");
    }
};

export const updateEmployee = async (data: any, id: number) => {
    const response = await fetch(`http://localhost:8080/employees/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Could not update employee record");
    }
};

export const getEmployeeById = async (id: number) => {
    const response = await fetch(`http://localhost:8080/employees/${id}`);
    return await response.json();
};
