import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
// import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {
  FcOrganization,
  FcBusinessman,
  FcAlphabeticalSortingAz,
  FcBullish,
  FcGraduationCap,
  FcPicture,
  FcIdea,
  FcLibrary,
  FcAdvertising,
  FcEngineering,
  FcFinePrint,
  FcPlus,
} from "react-icons/fc";

import { getJobDetails } from "../../Redux/Actions/jobDetails";
import { apply } from "../../Redux/Actions/applyJob";
import Alert from "../../Components/Modal/modal";
import "./styles.css";

export default function JobDetails(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const darkMode = useSelector((state) => state.toggleTheme.darkMode);

  const Job = useSelector((state) => state.jobDetails.details);
  // const Applied = useSelector((state) => state.apply.applied);

  const alert = useSelector((state) => state.alert);

  React.useEffect(() => {
    dispatch(getJobDetails(props.jobId));
  }, [dispatch, props.jobId]);

  const applyJob = (id, jobTitle) => {
    dispatch(apply(id, jobTitle));
    setTimeout(() => {
      props.toggleModal();
    }, 3000);
  };

  // React.useEffect(() => {
  //   if (alert.type === "success") {
  //     setTimeout(() => {
  //       navigate("/");
  //     }, 3000);
  //   }
  // }, [alert, navigate, props.toggleModal]);

  return (
    <React.Fragment>
      {props.jobId === Job._id && (
        <Modal
          show={props.showJobDetails}
          centered
          size="xl"
          onHide={props.toggleModal}
          className="job_details_modal"
          backdrop="static"
        >
          <div
            className={
              darkMode
                ? "job_details_container_dark"
                : "job_details_container_light"
            }
          >
            <Modal.Header closeButton>
              <h3 className="header">Job Details</h3>
            </Modal.Header>
            <Modal.Body className="job_details_modal_body">
              <div id="jobDetails" className="text_container">
                <div className="title_apply2">
                  <h2 className="title">{Job.jobTitle}</h2>
                  <button
                    onClick={() => applyJob(Job._id, Job.jobTitle)}
                    style={{
                      backgroundColor: darkMode ? "cyan" : "deeppink",
                      color: darkMode ? "black" : "white",
                    }}
                    className="apply_btn"
                  >
                    Apply Now →
                  </button>
                </div>
                <div className="title_apply">
                  <FcOrganization fontSize="45px" />
                  <h4 className="location_company_name">
                    {Job.companyName}, {Job.location}
                  </h4>
                </div>
                <div className="title_apply">
                  <FcBusinessman fontSize="45px" />
                  <h4 className="location_company_name">
                    {Job.employeesCount}+ employees
                  </h4>
                </div>
                <div className="title_apply">
                  <FcAlphabeticalSortingAz fontSize={"45px"} />
                  <h4 className="location_company_name">{Job.level}</h4>
                </div>
                <div className="title_apply">
                  <FcBullish fontSize="45px" />
                  <h4 className="location_company_name">
                    See how you can compare to {Job.applicants}+ applicants
                  </h4>
                </div>
                <div className="title_apply">
                  <FcGraduationCap fontSize="45px" />
                  <h4 className="location_company_name">
                    Skills: {Job.skills} +3 more
                  </h4>
                </div>
                <div className="about_job">
                  <h2 className="about_job_head">About Job</h2>
                  <h4 className="location_company_name">{Job.aboutJob}</h4>
                </div>
                <div className="title_apply">
                  <FcPicture fontSize="45px" />
                  <h4 className="location_company_name">
                    Type Of Employment: {Job.typeOfEmployment}
                  </h4>
                </div>
                <div className="title_apply">
                  <h4 className="location_company_name">
                    {Job.responsibilities.map((item, idx) => (
                      <div key={idx} className="responsibilities_container">
                        <p className="responsibility_item">
                          <FcAdvertising fontSize="45px" /> → → → → {item}
                        </p>
                      </div>
                    ))}
                  </h4>
                </div>
                <div className="title_apply">
                  <FcIdea fontSize="45px" />
                  <h4 className="location_company_name">
                    Mandatory: Knowledge in {Job.skills}
                  </h4>
                </div>
                <h4 className="location_company_name">
                  <div className="title_apply">
                    <h4 className="location_company_name">
                      {Job.requirements.map((item, idx) => (
                        <div key={idx} className="responsibilities_container">
                          <p className="responsibility_item">
                            <FcEngineering fontSize="45px" /> → → → → {item}
                          </p>
                        </div>
                      ))}
                    </h4>
                  </div>
                </h4>
                <div className="title_apply">
                  <h4 className="location_company_name">
                    {Job.niceToHave.map((item, idx) => (
                      <div key={idx} className="responsibilities_container">
                        <p className="responsibility_item">
                          <FcFinePrint fontSize="45px" /> → → → → {item}
                        </p>
                      </div>
                    ))}
                  </h4>
                </div>
                <div className="title_apply">
                  <h4 className="location_company_name">
                    {Job.weOffer.map((item, idx) => (
                      <div key={idx} className="responsibilities_container">
                        <p className="responsibility_item">
                          {item} → → → →
                          <FcPlus fontSize="45px" />
                        </p>
                      </div>
                    ))}
                  </h4>
                </div>
                <div className="title_apply">
                  <FcLibrary fontSize="45px" />
                  <h4 className="location_company_name">
                    {Job.remote
                      ? "Work From Home/Work From Office"
                      : "Work From Office only"}
                  </h4>
                </div>
                <div className="about_job">
                  <h2 className="about_job_head">About the Company</h2>
                  <h4 className="location_company_name">{Job.aboutCompany}</h4>
                </div>
              </div>
            </Modal.Body>
          </div>
        </Modal>
      )}
      {alert.message && <Alert show={true} />}
    </React.Fragment>
  );
}
