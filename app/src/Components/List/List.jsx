import { useEffect, useState } from "react";
import "./List.css";

const fields = [
  "Username",
  "Code Language",
  "Stdin",
  "TimeStamp",
  "Source Code",
];

const HeaderField = ({ field }) => {
  return (
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    >
      {field}
    </th>
  );
};

function List({ isModalOpen, setIsModalOpen }) {
  const [submissions, setSubmissions] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:5000/submissions/");
        const data = await res.json();

        setSubmissions(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [isModalOpen]);
  return (
    <div className="sm:px-6 lg:px-8 py-4">
      <div className="my-4 flex justify-between">
        <h1 className="text-3xl">Code Submissions</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          type="button"
          className="px-2.5 py-1.5 border-none font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 "
        >
          Create A Submission
        </button>
      </div>
      <div className="py-2 mx-auto inline-block min-w-full">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {fields.map((field, ind) => (
                  <HeaderField key={ind} field={field} />
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {submissions.length
                ? submissions.map((submission) => (
                    <tr key={submission.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {submission.username}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {submission.code_language}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {submission.stdin}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(submission.created_at).toLocaleString(
                          "en-IN"
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {submission.source_code
                          .slice(0, 100)
                          .split("\n")
                          .map((line, index) => (
                            <div key={index}>{line}</div>
                          ))}
                      </td>
                    </tr>
                  ))
                : ""}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default List;
