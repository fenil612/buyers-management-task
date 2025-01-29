import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";

import { buyerValidations } from "../../validationsSchema/buyerValidation";
import { addBuyer, fetchBuyers } from "../../redux/buyersReducer";
import Input from "../fields/Input";
import Select from "../fields/Select";
import Textarea from "../fields/TextArea";

const AddBuyer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      phone: "",
      buyingType: "",
      diamondPurchase: {
        diamondType: "",
        weight: "",
        price: "",
      },
      extraCharges: "",
    },
    validationSchema: buyerValidations,
    onSubmit: async (values) => {
      console.log("values==>", values);
      dispatch(addBuyer(values));
      dispatch(fetchBuyers());
      navigate("/buyers");
      formik.resetForm();
    },
  });

  const options = [
    { value: "Retail", label: "Retail" },
    { value: "Wholesale", label: "Wholesale" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-8 sm:p-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center">
          <h1 className="text-3xl font-bold mb-2">Add Buyer Details</h1>
          <p className="text-sm text-blue-200">
            Fill in the buyer details below to add them to the list.
          </p>
        </div>
        <div className="p-8 sm:p-12">
          <form onSubmit={formik.handleSubmit} className="space-y-10">
            {/* Personal Details Section */}
            <div>
              <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-4">
                Personal Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  label="Name"
                  name="name"
                  id="name"
                  formik={formik}
                />
                <Input
                  type="email"
                  label="Email"
                  name="email"
                  id="email"
                  formik={formik}
                />
                <Select
                  label="Buying Type"
                  name="buyingType"
                  options={options}
                  formik={formik}
                />
                <Input
                  type="text"
                  label="Phone"
                  name="phone"
                  id="phone"
                  formik={formik}
                />
              </div>
              <div className="mt-6">
                <Textarea label="Address" name="address" formik={formik} />
              </div>
            </div>

            {/* Diamond Purchase Section */}
            <div>
              <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-4">
                Diamond Purchase Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Input
                  type="text"
                  label="Diamond Type"
                  name="diamondPurchase.diamondType"
                  id="diamondType"
                  formik={formik}
                />
                <Input
                  type="number"
                  label="Diamond Weight"
                  name="diamondPurchase.weight"
                  id="weight"
                  formik={formik}
                />
                <Input
                  type="number"
                  label="Diamond Price"
                  name="diamondPurchase.price"
                  id="price"
                  formik={formik}
                />
              </div>
            </div>

            {/* Extra Charges Section */}
            <div>
              <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-4">
                Additional Details
              </h2>
              <Input
                type="number"
                label="Extra Charges"
                name="extraCharges"
                id="extraCharges"
                formik={formik}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-500"
              >
                Add Buyer
              </button>
            </div>

            {/* Navigation */}
            <p className="text-sm text-center mt-6 text-gray-600 dark:text-gray-400">
              Check buyer list:{" "}
              <NavLink
                to="/buyers"
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
              >
                View Buyers List
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBuyer;
