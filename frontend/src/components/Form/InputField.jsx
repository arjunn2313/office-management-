const InputField = ({ label, name, type = "text", register, options }) => {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      {type === "select" ? (
        <select
          {...register(name)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          {...register(name)}
          type={type}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />
      )}
    </div>
  );
};

export default InputField;
