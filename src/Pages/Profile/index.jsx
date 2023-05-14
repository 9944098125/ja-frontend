import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProfile } from "../../Redux/Actions/getProfile";
import "./styles.css";

export default function Profile() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.toggleTheme.darkMode);

  const userId = JSON.parse(localStorage.getItem("user_id"));

  const User = useSelector((state) => state.getProfile.user);

  React.useState(() => {
    dispatch(getProfile(userId));
  }, [userId]);

  return (
    <React.Fragment>
      <div
        className={
          darkMode ? "profile_container_dark" : "profile_container_light"
        }
      >
        {User && (
          <div className="total_container">
            <div
              style={{
                boxShadow: darkMode
                  ? "1px 1px 1px 1px deeppink"
                  : "1px 1px 1px 1px cyan",
              }}
              className="left_part"
            >
              <div className="details_row">
                <h3 className="labels">Name: → → → → </h3>
                <h2 className="answers">{User && User.username}</h2>
              </div>

              <div className="details_row">
                <h3 className="labels">Email: → → → → </h3>
                <h2 className="answers">{User && User.email}</h2>
              </div>

              <div className="details_row">
                <h3 className="labels">City: → → → → </h3>
                <h2 className="answers">{User && User.city}</h2>
              </div>

              <div className="details_col">
                <h3 className="labels">Bio: ↓ ↓ ↓ ↓ </h3>
                <h2 className="answers">{User && User.bio}</h2>
              </div>
            </div>
            <div
              style={{
                boxShadow: darkMode
                  ? "1px 1px 1px 1px deeppink"
                  : "1px 1px 1px 1px cyan",
              }}
              className="right_part"
            >
              <img src={User?.photo} alt="" />
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
