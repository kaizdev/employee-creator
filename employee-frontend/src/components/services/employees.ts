export const host = "https://employee-creator.onrender.com";

export const getAllEmployees = async () => {
    // fetch the data
    const response = await fetch(`${host}/employees`);
    return await response.json();
};

export const createEmployee = async (data: any) => {
    const response = await fetch(`${host}/employees`, {
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
    const response = await fetch(`${host}/employees/${id}`, {
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
    const response = await fetch(`${host}/employees/${id}`);
    return await response.json();
};
