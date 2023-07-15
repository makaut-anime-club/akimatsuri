const Card = ({title, body, link, imgLink, imgDescription}) => {
  return (
    <div class="card" style={{maxWidth: '20rem', margin: '1rem'}}>
      <img src={imgLink} class="card-img-top" alt={imgDescription} />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text" >
          {body.map(para=><p style={{marginBottom: "1rem"}}>{para}</p>)}
        </p>
        <a href="link" class="btn btn-primary">
          Go to Event
        </a>
      </div>
    </div>
  );
};

export default Card;    