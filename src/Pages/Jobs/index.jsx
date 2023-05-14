import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getJobs } from "../../Redux/Actions/jobs";
import "./styles.css";
import JobDetails from "../JobDetails";

export default function Jobs() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  const [showJobDetails, setShowJobDetails] = React.useState({
    id: "",
    bool: false,
  });

  const JobsState = useSelector((state) => state.jobs);
  // const Job = useSelector((state) => state.jobDetails.details);

  const darkMode = useSelector((state) => state.toggleTheme.darkMode);

  const toggleModal = (id) => {
    setShowJobDetails({ id: id, bool: !showJobDetails.bool });
  };

  return (
    <React.Fragment>
      <div
        className={darkMode ? "jobs_container_dark" : "jobs_container_light"}
      >
        <div className="jobs_list_container">
          {JobsState.jobs.map((job, idx) => (
            <div key={idx} className="each_job">
              <div className="left_piece">
                <img src={job?.companyLogo} alt="" className="company_logo" />
              </div>
              <div className="right_piece">
                {/* job title */}
                <h3 className="job_title">{job.jobTitle}</h3>
                {/* company name */}
                <h4 className="company_name">{job.companyName}</h4>
                {/* city, state, and country */}
                <p className="location">{job.location}</p>
                {/* remote or office */}
                <p className="remote">
                  {job.remote ? "remote only" : "work from office"}
                </p>
              </div>
              <div className="arrow_container">
                <button
                  onClick={() => toggleModal(job._id)}
                  style={{ color: darkMode ? "white" : "black" }}
                  type="button"
                  className="arrow"
                >
                  →
                </button>
                {showJobDetails.bool === true &&
                  showJobDetails.id === job._id && (
                    <JobDetails
                      toggleModal={toggleModal}
                      jobId={job._id}
                      showJobDetails={showJobDetails}
                    />
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
