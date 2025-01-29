import * as Yup from "yup";

export const buyerValidations = Yup.object({
  name: Yup.string().trim().required("Name is required"),
  email: Yup.string()
    .trim()
    .email("Invalid email format")
    .required("Email is required"),
  address: Yup.string().trim().required("Address is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone is required"),
  buyingType: Yup.string().required("Buying Type is required"),
  diamondPurchase: Yup.object({
    diamondType: Yup.string().trim().required("Diamond Type is required"),
    weight: Yup.number()
      .typeError("Weight must be a number")
      .required("Weight is required")
      .positive("Weight must be positive")
      .min(0.1, "Weight must be at least 0.1"),
    price: Yup.number()
      .typeError("Price must be a number")
      .required("Price is required")
      .positive("Price must be positive")
      .min(0.1, "Price must be at least 0.1"),
  }),
  extraCharges: Yup.number()
    .required("Extra Charges are required")
    .positive("Extra Charges must be positive")
    .min(0, "Extra Charges must be at least 0"),
});
