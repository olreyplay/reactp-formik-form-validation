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
      let errors = {};

      if (values.username.trim() === "") {
        errors.username = "Name can not be empty";
      }

      if (values.occupation.trim() === "") {
        errors.occupation = "Occupation can not be empty";
      }

      console.log(errors);
      return errors;
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
      {formik.touched.username && formik.errors.username && (
        <span>{formik.errors.username}</span>
      )}
      <input
        onChange={formik.handleChange}
        value={formik.values.occupation}
        type="text"
        name="occupation"
        placeholder="Occupation"
      />
      {formik.touched.occupation && formik.errors.occupation && (
        <span>{formik.errors.occupation}</span>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
