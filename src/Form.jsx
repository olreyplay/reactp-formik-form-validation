import React from "react";
import { useFormik } from "formik";

// User name: <name>; User occupation: <occupation>

const Form = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      occupation: "",
    },
    onSubmit: (values, { resetForm }) => {
      const userName = values.username;
      const userOccupation = values.occupation;
      console.log(`User name: ${userName}; User occupation: ${userOccupation}`);
      alert(`User name: ${userName}; User occupation: ${userOccupation}`);
      resetForm();
    },
    validate: (values) => {
      // Perform form field validation
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        onChange={formik.handleChange}
        value={formik.values.username}
        type="text"
        name="username"
        placeholder="Name"
      />
      <input
        onChange={formik.handleChange}
        value={formik.values.occupation}
        type="text"
        name="occupation"
        placeholder="Occupation"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
