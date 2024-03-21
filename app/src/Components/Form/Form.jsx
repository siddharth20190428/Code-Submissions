import "./Form.css";

function Form({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };
  return (
    <div>
      <form>
        <div>
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
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div>
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
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div>
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
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="you@example.com"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
