import React, { useState } from "react";

function Form({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  return (
    <div className="m-4">
      <h1 className="text-3xl sm:text-4xl font-medium mb-4">
        Create a Submission
      </h1>
      <form className="max-w-lg mx-auto sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              htmlFor="code_language"
              className="block text-sm font-medium text-gray-700"
            >
              Code Language
            </label>
            <div className="mt-1">
              <select
                id="code_language"
                onChange={handleChange}
                className="border-2 py-1 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              >
                <option value="c">C</option>
                <option value="cpp">C++</option>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
              </select>
            </div>
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
            <textarea
              id="stdin"
              onChange={handleChange}
              rows="3"
              className="border-2 resize-none py-1 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            ></textarea>
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
            <textarea
              id="source_code"
              onChange={handleChange}
              rows="10"
              className="border-2 resize-none py-1 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
