const Select = ({ label, name, id, options, formik }) => {
  return (
    <div>
      <label
        htmlFor={id || name}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 py-1"
      >
        {label}
      </label>
      <select
        name={name}
        id={id || name}
         className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
        value={formik?.values?.[name] || ""}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
      >
        <option value="">Select</option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {formik?.touched?.[name] && formik?.errors?.[name] && (
        <p className="text-red-500 text-sm mt-1">{formik.errors[name]}</p>
      )}
    </div>
  );
};

export default Select;
