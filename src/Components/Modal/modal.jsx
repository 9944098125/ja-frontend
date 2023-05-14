import React from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./modal.css";
import check from "../../Assets/tick.svg";
import cross from "../../Assets/cross.svg";

export default function Alert(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    height: "100%",
    p: "10px 25px",
    borderRadius: "9px",
    display: "inline",
  };
  //Accessing props
  const { show } = props;
  //Redux state
  const alert = useSelector((state) => state.alert);

  return (
    <>
      {alert.type === "success" ? (
        <Modal className="modal" style={style} size="sm" show={show} centered>
          <Modal.Title className="alert-modal-success">
            <div className="alert-modal">
              <img
                style={{
                  borderTopRightRadius: "9px",
                  borderTopLeftRadius: "9px",
                }}
                src={check}
                alt="success"
              />
            </div>
            <div className="alert-modal">Success!</div>
          </Modal.Title>
          <Modal.Body className="alert-message">{alert.message}</Modal.Body>
        </Modal>
      ) : (
        <Modal className="modal" style={style} size="sm" show={show} centered>
          <Modal.Title className="alert-modal-error">
            <div className="alert-modal">
              <img
                style={{
                  borderTopRightRadius: "9px",
                  borderTopLeftRadius: "9px",
                }}
                src={cross}
                alt="error"
              />
            </div>
            <div className="alert-modal">Error!</div>
          </Modal.Title>
          <Modal.Body className="alert-message">{alert.message}</Modal.Body>
        </Modal>
      )}
    </>
  );
}
