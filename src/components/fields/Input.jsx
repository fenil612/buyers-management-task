import { getIn } from "formik";

const Input = ({ label, className, type, name, id, formik }) => {
  // Use Formik's getIn utility to handle nested values and errors
  const value = getIn(formik.values, name);
  const error = getIn(formik.errors, name);
  const touched = getIn(formik.touched, name);

  return (
    <div>
      <label
        htmlFor={id || name}
        className={
          className
            ? className
            : "block text-sm font-medium text-gray-700 dark:text-gray-300 py-1"
        }
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id || name}
        className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
        value={value || ""}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {touched && error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
