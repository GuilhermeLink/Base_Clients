import * as yup from "yup";

export const schemaCreateAccount = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),  
  phone: yup
    .string()
    .min(10, "Phone must be at least 10 characters")
    .required("Phone is required")
});

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const schemaUpdateAccount = yup.object().shape({
  name: yup.string().min(2, "Name must be at least 2 characters"),
  email: yup.string().email("Invalid email format"),
  password: yup.string().min(8, "Password must be at least 8 characters"),
  phone: yup.string().min(10, "Phone must be at least 10 characters"),
  admin: yup.boolean()
});
