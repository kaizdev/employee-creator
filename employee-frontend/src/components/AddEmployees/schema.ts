import * as yup from "yup";

export const schema = yup.object({
    firstName: yup.string().required("Please enter the first name"),
    lastName: yup.string().required("Please enter a surname"),
    email: yup.string().required("Please enter the email").email(),
    mobile: yup
        .string()
        .required("Please enter a mobile")
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, "Must be 10 digits")
        .max(10, "Must be 10 digits"),
    employmentType: yup.mixed().oneOf(["CONTRACT", "PERMANENT"]),
    address: yup.string().required("Please enter an address"),
    employmentHours: yup.mixed().oneOf(["FULL_TIME", "PART_TIME"]),
    startDate: yup.date().required("Please enter start date"),
    finishDate: yup.date().nullable().notRequired(),
});
