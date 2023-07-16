const Card = ({title, body, link, imgLink, imgDescription}) => {
  return (
    <div className="card" style={{maxWidth: '20rem', margin: '1rem', backgroundColor: '#423d3d', color: 'white'}}>
      <img src={imgLink} className="card-img-top" alt={imgDescription} style={{}}/>
      <div className="card-body">
        <h5 className="card-title" style={{textAlign: 'center', fontWeight: 'bolder'}}>{title}</h5>
        <p className="card-text" >
          {body.map(para=><p style={{marginBottom: "1rem"}} key={para}>{para}</p>)}
        </p>
        <a href={link} className="btn btn-secondary" style={{boxShadow: 'inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3)'}}>
          Go to Event
        </a>
      </div>
    </div>
  );
};

export default Card;