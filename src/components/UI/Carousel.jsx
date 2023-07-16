import Carousel from 'react-bootstrap/Carousel';

const img1 = {src:"https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/04/ai-hoshino-oshi-no-ko-cosplay.jpg", alt:"Cosplay"}
const img2 = {src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyMfSbOsdSSJ5mHyniQ6Blok2vyFJTDOtmBw&usqp=CAU", alt:"Quiz competition"}
const img3 = {src:"https://se-images.campuslabs.ca/clink/images/9d1390fc-220e-4c6d-9f20-bd537f8c750a1a2c464e-5c4b-46e5-86fe-4cea22d6ad4d.png?preset=med-w", alt:"Meme Competition"}



function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item style={{height: '400px', overflow: 'hidden '}} >
        <img
          className="d-block w-100"
          src={img1.src}
          alt={img1.alt}
          style={{height: '19.5rem', width: '19.5rem', borderRadius: '1rem' }}
        />
        <Carousel.Caption>
          <h3 style={{textShadow: '1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue'}}>{img1.alt}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height: '400px'}}>
        <img
          className="d-block w-100"
          src={img2.src}
          alt={img2.alt}
          style={{height: '19.5rem', width: '19.5rem', borderRadius: '1rem' }}
        />

        <Carousel.Caption>
          <h3 style={{textShadow: '1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue'}}>{img2.alt}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height: '400px'}}>
        <img
          className="d-block w-100"
          src={img3.src}
          alt={img3.alt}
          style={{height: '19.5rem', width: '19.5rem', borderRadius: '1rem' }}
        />

        <Carousel.Caption>
          <h3 style={{textShadow: '1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue'}}>{img3.alt}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;