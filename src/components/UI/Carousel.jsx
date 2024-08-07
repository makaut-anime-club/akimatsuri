import Carousel from 'react-bootstrap/Carousel';

const carouselImages = [
  {src: "https://i.ibb.co/r4QrVKj/Event-Teasers-Cosplay.png", alt: "Cosplay", link: "https://docs.google.com/forms/d/e/1FAIpQLSdMxGkD2_qfIoYzUVXiLXQswgE2S4RU6yeytlCuaXNS-YcopQ/viewform"},
  {src: "https://i.ibb.co/0ng19p6/Event-Teasers-Quiz-4.png", alt: "Quiz", link: "https://example.com/quiz"},
  {src: "https://i.ibb.co/G7nxPKH/Event-Teasers-1.png", alt: "Drawing", link: "https://example.com/drawing"},
  {src: "https://i.ibb.co/qx6YTPR/Event-Teasers-Meme.png", alt: "Meme", link: "https://example.com/meme"},
  {src: "https://i.ibb.co/6rQZfLy/Event-Teasers-Karaoke.png", alt: "Karaoke", link: "https://example.com/karaoke"},
  {src: "https://i.ibb.co/x6R77r8/AKIMATSURI-Competition-Teasers.png", alt: "Poster", link: "https://example.com/poster"},
];

function UncontrolledExample() {
  return (
    <Carousel>
      {carouselImages.map((item, index) => (
        <Carousel.Item key={index} style={{height: '400px', overflow: 'hidden'}}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img
              className="d-block w-100"
              src={item.src}
              alt={item.alt}
              style={{height: '20rem', width: '30rem', borderRadius: '1rem', filter: 'brightness(90%)'}}
            />
            <Carousel.Caption>
              <h3 style={{textShadow: '1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue'}}>{item.alt}</h3>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default UncontrolledExample;
