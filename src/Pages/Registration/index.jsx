import React from "react";
import { Formik, Form, Field } from "formik";

import "./styles.css";

export default function Registration() {
  const initialValues = {};

  function validate() {}

  function submitRegisterForm() {}

  return (
    <React.Fragment>
      <div className="registration_container">
        <div className="heading_container">
          <h3 className="heading">
            Register
            <span> for simple job boarding</span>
          </h3>
        </div>
        <div className="white_box">
          <Formik
            initialValues={initialValues}
            validate={(values) => validate(values)}
            onSubmit={(values) => submitRegisterForm(values)}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="row">
                  <div className="col mb-3">
                    <label htmlFor="firstName">First Name</label>
                    <Field
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Enter your First Name"
                      className={
                        errors.firstName && touched.firstName
                          ? "form-control primary_input_field is-invalid"
                          : "form-control primary_input_field"
                      }
                    />
                    {touched.firstName && errors.firstName && (
                      <div className="invalid-feedback">{errors.firstName}</div>
                    )}
                  </div>

                  <div className="col mb-3">
                    <label htmlFor="lastName">Last Name</label>
                    <Field
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Enter your Last Name"
                      className={
                        errors.lastName && touched.lastName
                          ? "form-control primary_input_field is-invalid"
                          : "form-control primary_input_field"
                      }
                    />
                    {touched.lastName && errors.lastName && (
                      <div className="invalid-feedback">{errors.lastName}</div>
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="col mb-3">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your Email"
                      className={
                        errors.email && touched.email
                          ? "form-control primary_input_field is-invalid"
                          : "form-control primary_input_field"
                      }
                    />
                    {touched.email && errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  <div className="col mb-3">
                    <label htmlFor="city">City</label>
                    <Field
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Enter your City"
                      className={
                        errors.city && touched.city
                          ? "form-control primary_input_field is-invalid"
                          : "form-control primary_input_field"
                      }
                    />
                    {touched.city && errors.city && (
                      <div className="invalid-feedback">{errors.city}</div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-3">
                    <label htmlFor="password">Password</label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your Password"
                      className={
                        errors.password && touched.password
                          ? "form-control primary_input_field is-invalid"
                          : "form-control primary_input_field"
                      }
                    />
                    {touched.password && errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>

                  <div className="col mb-3">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Field
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Enter your First Name"
                      className={
                        errors.confirmPassword && touched.confirmPassword
                          ? "form-control primary_input_field is-invalid"
                          : "form-control primary_input_field"
                      }
                    />
                    {touched.confirmPassword && errors.confirmPassword && (
                      <div className="invalid-feedback">
                        {errors.confirmPassword}
                      </div>
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="col mb-3">
                    <label htmlFor="bio">Bio</label>
                    <Field
                      as="textarea"
                      rows="6"
                      type="text"
                      name="bio"
                      id="bio"
                      placeholder="Enter your Bio"
                      className={
                        errors.bio && touched.bio
                          ? "form-control primary_input_field is-invalid"
                          : "form-control primary_input_field"
                      }
                    />
                    {touched.bio && errors.bio && (
                      <div className="invalid-feedback">{errors.bio}</div>
                    )}
                  </div>

                  <div className="col mb-3">
                    <label htmlFor="profilePicture">Profile Picture</label>
                    <Field
                      type="file"
                      name="profilePicture"
                      id="profilePicture"
                      className={
                        errors.profilePicture && touched.profilePicture
                          ? "form-control primary_input_field is-invalid"
                          : "form-control primary_input_field"
                      }
                    />
                    {touched.profilePicture && errors.profilePicture && (
                      <div className="invalid-feedback">
                        {errors.profilePicture}
                      </div>
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </React.Fragment>
  );
}
