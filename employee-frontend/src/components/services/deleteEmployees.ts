const host = "https://employee-creator.onrender.com";

export const deleteEmployees = async (id: number) => {
    try {
        const response = await fetch(`${host}/employees/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(
                `HTTP error. Status: ${response.status}, message: ${errorData}`
            );
        } else {
            alert("Employee deleted successfully");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error occurred while deleting employee");
    }
};
