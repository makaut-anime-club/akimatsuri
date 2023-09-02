import Accordion from 'react-bootstrap/Accordion';

const Card = ({ title, body, link, imgLink, imgDescription, cardBGColor }) => {
  return (
    <div
      className="card"
      style={{
        maxWidth: "20rem",
        margin: "1rem",
        backgroundColor: cardBGColor,
        color: "white",
        textAlign: 'center'
      }}
    >
      <img
        src={imgLink}
        className="card-img-top"
        alt={imgDescription}
        style={{}}
      />
      <div className="card-body">
        <Accordion>
      <Accordion.Item style={{background: 'black', color: 'white', margin: '0 0 1rem', outline: 'none', border: 'none'}} eventKey="0">
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body style={{background: cardBGColor, textAlign: 'left'}}>
        <p className="card-text">
          {body.map((para) => (
            <p
              style={{
                marginBottom: "1rem",
                fontSize: "1rem",
                fontFamily: "sans-serif",
              }}
              key={para}
            >
              {para}
            </p>
          ))}
        </p>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>

        <button
          disabled={link.trim().length === 0}
          href={link}
          className="btn"
          style={{
            boxShadow:
              "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3)", borderRadius: '23px', background: 'transparent'
          }}
        >
          <a href={link} style={{color: 'white', textDecoration: 'none'}}>
            {link.trim().length ? "Go to Event" : "Registrations opening soon"}
          </a>
        </button>
      </div>
    </div>
  );
};

export default Card;
