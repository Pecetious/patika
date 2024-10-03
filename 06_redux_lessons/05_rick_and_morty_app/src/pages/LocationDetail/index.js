import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading";
import Masonry from "react-masonry-css";
function LocationDetail() {
  const { loc_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [loc, setLoc] = useState(null);
  const [residents, setResidents] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/location/${loc_id}`)
      .then((res) => res.data)
      .then((data) => {
        setLoc(data);
        return Promise.all(
          data.residents.map((url) => axios.get(url).then((res) => res.data))
        );
      })
      .then((residentData) => setResidents(residentData))
      .finally(setLoading(false));
  }, [loc_id]);
  return (
    <div>
      {loading && <Loading />}
      {!loading && loc && (
        <div className="loc_detail">
          <h2>{loc.name}</h2>
          <p>{loc.dimension}</p>
          <p>{loc.type}</p>
          <h4>Residents</h4>
          <Masonry
            breakpointCols={5}
            className="masonry_grid"
            columnClassName="masonry_col"
          >
            {residents.map((resident) => (
              <Link key={resident.id} className="loc_residents_card" to={`/character/${resident.id}`}>
                <h5>{resident.name}</h5>
                <div className="img_container">
                <img
                  src={resident.image}
                  alt={resident.name}
                  style={{ width: "100%" }}
                />
                </div>
              </Link>
            ))}
          </Masonry>
        </div>
      )}
    </div>
  );
}

export default LocationDetail;
