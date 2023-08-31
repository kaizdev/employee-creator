export type Employee = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    address: string;
    employmentType: string;
    employmentHours: string;
    startDate: string;
    finishDate?: string;
};

export interface EmployeeProps {
    employee: {
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        mobile: string;
        address: string;
        employmentType: string;
        employmentHours: string;
        startDate: string;
        finishDate?: string;
    };
}
