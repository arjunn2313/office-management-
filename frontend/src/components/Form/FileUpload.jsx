const FileUploadField = ({ label, name, register, accept = "image/*,application/pdf" }) => {
    return (
      <div>
        <label className="block text-sm font-medium">{label}</label>
        <input
          {...register(name)}
          type="file"
          accept={accept}
          className="mt-1 block w-full px-3 py-2 border border-dashed border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />
      </div>
    );
  };
  
  export default FileUploadField;
  