import React from "react";
import { useFormik } from "formik";
import validations from "./validations";
function Signup() {
  const { handleSubmit, handleChange, handleBlur, values, errors,touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validations,
  });
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          placeholder="jane@acme.com"
          type="email"
          value={values.email}
        />
        {errors.email && touched.email && <div className="error">{errors.email}</div>}
        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="password"
          placeholder="Enter password"
          type="password"
          value={values.password}
        />
        {errors.password && touched.password && <div className="error">{errors.password}</div>}
        <label htmlFor="passwordConfirm">Confirm Password</label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="passwordConfirm"
          placeholder="Confirm Password"
          type="password"
          value={values.passwordConfirm}
        />
        {errors.passwordConfirm && touched.passwordConfirm && (
          <div className="error">{errors.passwordConfirm}</div>
        )}
        <button type="submit">Submit</button>
        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  );
}

export default Signup;
