import "./Form.css";

function Form({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };
  return (
    <div className="m-4">
      <h1 className="text-xl font-medium mb-4">Create a Submission</h1>
      <form>
        <div className="my-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="username"
              onChange={handleChange}
              className="border-2 py-1 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="my-4">
          <label
            htmlFor="stdin"
            className="block text-sm font-medium text-gray-700"
          >
            Stdin
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="stdin"
              onChange={handleChange}
              className="border-2 py-1 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="my-4">
          <label
            htmlFor="code_language"
            className="block text-sm font-medium text-gray-700"
          >
            Code language
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="code_language"
              onChange={handleChange}
              className="border-2 py-1 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="my-4">
          <label
            htmlFor="source_code"
            className="block text-sm font-medium text-gray-700"
          >
            Source Code
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="source_code"
              onChange={handleChange}
              className="border-2 py-1 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
