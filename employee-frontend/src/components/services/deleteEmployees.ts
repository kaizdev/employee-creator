export const deleteEmployees = async (id: number) => {
    try {
        const response = await fetch(`http://localhost:8080/employees/${id}`, {
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
        alert("Error occured while deleting employee");
    }
};
