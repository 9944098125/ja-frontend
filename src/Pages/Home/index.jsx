import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./styles.css";

export default function Home() {
  const navigate = useNavigate();
  const isActivated = localStorage.getItem("is_activated");
  const user = localStorage.getItem("user");

  const darkMode = useSelector((state) => state.toggleTheme.darkMode);

  React.useEffect(() => {
    if (!isActivated || !user) {
      navigate("/login", { replace: true });
    }
  }, [isActivated, navigate, user]);

  return (
    <React.Fragment>
      <div className={darkMode ? "home_page_dark" : "home_page_light"}>
        <div className="transition_img"></div>
        <div className="home_content">
          <ul className="pros_of_ja">
            <li className="pros_item">
              → Jobby App is a well-established, popular platform that attracts
              250 million unique monthly visitors.
            </li>
            <li className="pros_item">
              → The site features built-in skills assessments to assist with
              candidate screening.
            </li>
            <li className="pros_item">
              → The platform features an extensive database of over 200 million
              resumes.
            </li>
            <li className="pros_item">
              → The platform offers free job search.
            </li>
            <li className="pros_item">
              → With the skill tests a candidate can overview himself/herself.
            </li>
          </ul>
          <div className="apply_btn_container">
            <Link
              to="/jobs"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button
                style={{
                  backgroundColor: darkMode ? "cyan" : "deeppink",
                  color: darkMode ? "black" : "white",
                }}
                className="apply_btn"
              >
                Apply Now →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
