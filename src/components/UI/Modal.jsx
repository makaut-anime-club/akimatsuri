import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function PopupModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        {/* <h3
          style={{
            fontFamily: "Russo One",
            color: "white",
            fontSize: "1.5rem",
            padding: "0 0 1rem",
          }}
        >
          AKIMATSURI Registrations Open!
        </h3>

        <p style={{ color: "black", fontSize: "1.05rem" }}>
          You can register for the offline competition only after completing the
          AKIMATSURI Registration.
        </p>
        <div className="d-flex justify-content-center" style={{margin: "1rem auto 2rem"}}>
          <Link to="https://forms.gle/yQYdTVA8yN64strm8" style={{}}>
            <Button
              onClick={props.onHide}
              style={{ backgroundColor: "transparent", fontSize: '18px'}}
            >
              Register here
            </Button>
          </Link>
        </div>
        <p style={{ color: "black", fontSize: "1.05rem" }}>
          <span style={{ fontSize: "1.25rem" }}>Note</span>: If you are not
          coming to the event, online competition registrations are free (meme
          making and poster making )
        </p> */}
        <img src="/eventTimings.png" alt="" />

      </Modal.Body>
      <Modal.Footer style={{ textAlign: "center" }}>
        <Link to="/events">
          <Button
            onClick={props.onHide}
            style={{ backgroundColor: "transparent" }}
          >
            Go to Events
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

export default PopupModal;
