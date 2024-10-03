import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocations } from "../../redux/locationsSlice";
import Error from "../../components/Error";
import Masonry from "react-masonry-css";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";
function Locations() {
  const locations = useSelector((state) => state.locations.items);
  const status = useSelector((state) => state.locations.status);
  const error = useSelector((state) => state.locations.error);
  const nextPage = useSelector((state) => state.locations.page);
  const hasNextPage = useSelector((state) => state.locations.hasNextPage);
  const triggered = useRef(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle" && !triggered.current) {
      dispatch(getLocations());
      triggered.current = true;
    }
  }, [dispatch, status]);
  if (status === "failed") return <Error message={error} />;
  return (
    <div>
      <h1 className="loc_title">Locations</h1>
      <Masonry
        breakpointCols={5}
        className="masonry_grid"
        columnClassName="masonry_col"
      >
        {locations &&
          locations.map((loc) => (
            <div className="loc_card" key={loc.id}>
              <Link to={`/location/${loc.id}`}>
                <h5>{loc.name}</h5>
              </Link>
            </div>
          ))}
      </Masonry>
      <div style={{ padding: 15, textAlign: "center" }}>
        {status === "loading" && <Loading />}
        {status !== "loading" &&
          hasNextPage && (
            <button onClick={() => dispatch(getLocations(nextPage))}>
              Load More
            </button>
          )}
        {!hasNextPage && <div>No more locations to be shown</div>}
      </div>
    </div>
  );
}

export default Locations;
