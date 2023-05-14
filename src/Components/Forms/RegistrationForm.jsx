import React from "react";
import { Formik, Form, Field } from "formik";
import {
  MdDriveFileRenameOutline,
  MdPassword,
  MdLocationPin,
} from "react-icons/md";
import { AiTwotoneMail, AiOutlineHistory } from "react-icons/ai";

import "./styles.css";

function RegistrationForm(props) {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    bio: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <React.Fragment>
      <div className="white_box">
        <Formik
          initialValues={initialValues}
          validate={(values) => props.validate(values)}
          onSubmit={(values) => props.submitRegisterForm(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="row">
                <div className="col">
                  <label htmlFor="firstName">
                    First Name <MdDriveFileRenameOutline />
                  </label>
                  <Field
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter your First Name"
                    className={
                      errors.firstName && touched.firstName
                        ? "form-control primary_input_Field is-invalid"
                        : "form-control primary_input_Field"
                    }
                  />
                  {touched.firstName && errors.firstName && (
                    <div className="invalid-feedback">{errors.firstName}</div>
                  )}
                </div>

                <div className="col">
                  <label htmlFor="lastName">
                    Last Name <MdDriveFileRenameOutline />
                  </label>
                  <Field
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter your Last Name"
                    className={
                      errors.lastName && touched.lastName
                        ? "form-control primary_input_Field is-invalid"
                        : "form-control primary_input_Field"
                    }
                  />
                  {touched.lastName && errors.lastName && (
                    <div className="invalid-feedback">{errors.lastName}</div>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label htmlFor="email">
                    Email <AiTwotoneMail />
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your Email"
                    className={
                      errors.email && touched.email
                        ? "form-control primary_input_Field is-invalid"
                        : "form-control primary_input_Field"
                    }
                  />
                  {touched.email && errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="col">
                  <label htmlFor="city">
                    City <MdLocationPin />
                  </label>
                  <Field
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Enter your City"
                    className={
                      errors.city && touched.city
                        ? "form-control primary_input_Field is-invalid"
                        : "form-control primary_input_Field"
                    }
                  />
                  {touched.city && errors.city && (
                    <div className="invalid-feedback">{errors.city}</div>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="password">
                    Password <MdPassword />
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your Password"
                    className={
                      errors.password && touched.password
                        ? "form-control primary_input_Field is-invalid"
                        : "form-control primary_input_Field"
                    }
                  />
                  {touched.password && errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>

                <div className="col">
                  <label htmlFor="confirmPassword">
                    Confirm Password <MdPassword />
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Enter your Password again"
                    className={
                      errors.confirmPassword && touched.confirmPassword
                        ? "form-control primary_input_Field is-invalid"
                        : "form-control primary_input_Field"
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
                <div className="col">
                  <label htmlFor="bio">
                    Bio <AiOutlineHistory />
                  </label>
                  <Field
                    as="textarea"
                    rows="2"
                    type="text"
                    name="bio"
                    id="bio"
                    placeholder="Enter your Bio"
                    className={
                      errors.bio && touched.bio
                        ? "form-control primary_input_Field is-invalid"
                        : "form-control primary_input_Field"
                    }
                  />
                  {touched.bio && errors.bio && (
                    <div className="invalid-feedback">{errors.bio}</div>
                  )}
                </div>

                <div className="col" style={{ justifyContent: "center" }}>
                  <div>
                    <input
                      id="profilePicture"
                      type="file"
                      onChange={(e) => props.onImageChange(e.target.files[0])}
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className="row">
                    <label htmlFor="profilePicture">
                      <img
                        src={
                          props.url !== ""
                            ? props.url
                            : "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366__340.png"
                        }
                        alt=""
                        className="profile_picture_preview"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <button type="submit" className="submit_btn">
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
}

export default RegistrationForm;
