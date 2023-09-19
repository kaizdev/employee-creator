export type Employee = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    address: string;
    employmentType: string;
    employmentHours: string;
    partTimeHours?: number | null;
    startDate: Date;
    finishDate?: Date | null;
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
        partTimeHours?: number | null;
        startDate: Date;
        finishDate?: Date | null;
    };
}
