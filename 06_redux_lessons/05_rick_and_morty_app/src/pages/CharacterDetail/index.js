import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading";
function CharacterDetail() {
  const { character_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);
  const [location, setLocation] = useState(null);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/character/${character_id}`)
      .then((res) => res.data)
      .then((data) => {
        setCharacter(data);
        if (data.location.url) {
          return axios.get(data.location.url).then((res) => res.data);
        }
      })
      .then((locationData) => {
        if (locationData) setLocation(locationData);
      })
      .finally(setLoading(false));
  }, [character_id]);
  return (
    <div>
      {loading && <Loading />}
      {!loading && character && (
        <div className="character_detail">
          <h2>{character.name}</h2>
          <div className="img_container">
            <img src={character.image} alt={character.name} />
          </div>
          <p>
            {"Status: "}
            {character.status}
          </p>
          <p>
            {"Species: "}
            {character.species}
          </p>
          <p>
            {"Gender: "}
            {character.gender}
          </p>
          <p>
            {"Origin: "}
            {character.origin.name}
          </p>
          {location && (
            <div style={{ display: "flex"}}>
              <p>Location: </p>
              <Link
                className="character_detail_loc"
                to={`/location/${location.id}`}
              >
                <p>{location.name}</p>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CharacterDetail;
