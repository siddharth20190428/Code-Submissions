import { useState } from "react";
import "./Form.css";

function Form() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          id="username"
          value={formData.username}
          onChange={(e) => handleChange(e)}
        />
        <button
          type="submit"
          onClick={() => console.log("submitted", formData)}
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default Form;
