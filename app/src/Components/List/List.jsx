import { useEffect, useState } from "react";
import "./List.css";

function List() {
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
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>S. No.</td>
            <td>Username</td>
            <td>Code Language</td>
            <td>Stdin</td>
            <td>Timestamp</td>
            <td>Source Code</td>
          </tr>
        </thead>
        <tbody>
          {submissions.length > 0
            ? submissions.map((obj, ind) => (
                <tr key={obj.id}>
                  <td>{ind + 1}</td>
                  <td>{obj.username}</td>
                  <td>{obj.code_language}</td>
                  <td>{obj.stdin}</td>
                  <td>{obj.timestamp}</td>
                  <td>{obj.source_code.slice(0, 100)}</td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
}

export default List;
