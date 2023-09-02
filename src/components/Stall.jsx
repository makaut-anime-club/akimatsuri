import {useState, useEffect} from "react";

import './Stall.css'
import Card from "./UI/Card";

const Stall = () => {
  const [stalls, setStalls] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(
        () => {
            const fetchStalls = async () => {
                const response = await fetch('https://akimatsuri-makaut-default-rtdb.asia-southeast1.firebasedatabase.app/stalls.json')
                const resData = await response.json();

                const loadedStalls = [];

                for(const key in resData) {
                    loadedStalls.push(
                        {
                            id: key,
                            name: resData[key].name,
                            imageURL: resData[key].image,
                            imageAltText: resData[key].imageAlt,
                            description: resData[key].description,
                            details: resData[key].details,
                            link: resData[key].link,
                        }
                    )
                }
                setStalls(loadedStalls);
            }
            setLoading(true)
            fetchStalls();
            setLoading(false)
        }
    ,[])
  return (
    <section id="stalls" className="stall">
      <div className="bg-image">
        <div className="content">
          {loading && <h1>Loading...</h1>}
          {!loading && <h1>{stalls.length > 0? 'Stalls' : 'Nothing  found'}</h1>}
          {!loading && <ul className="cards">
            {stalls.map((stalls) => (
              <li key={stalls.id}>
                <Card
                  title={stalls.name}
                  body={stalls.description}
                  link={stalls.link}
                  imgLink={stalls.imageURL}
                  imgDescription={stalls.name}
                  cardBGColor='#732f96'
                />
              </li>
            ))}
          </ul>}
        </div>
      </div>
    </section>
  );
};

export default Stall;
