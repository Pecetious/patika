import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../redux/charactersSlice";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
function Home() {
  const characters = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);
  const nextPage = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  const dispatch = useDispatch();
  // const data = useSelector((state) => state.characters);
  const triggered = useRef(false);
  useEffect(() => {
    if (status === "idle" && !triggered.current) {
      dispatch(getCharacters());
      triggered.current = true;
    }
  }, [dispatch, status]);
  if (status === "failed") return <Error message={error} />;
  return (
    <div>
      <h1>Characters</h1>
      <Masonry
        breakpointCols={5}
        className="masonry_grid"
        columnClassName="masonry_col"
      >
        {characters &&
          characters.map((character) => (
            <div className="character_card" key={character.id}>
              <Link to={`/character/${character.id}`}>
                <img
                  src={character.image}
                  style={{ width: "100%" }}
                  alt={character.name}
                />
                <h5>{character.name}</h5>
              </Link>
            </div>
          ))}
      </Masonry>
      <div style={{ padding: 15, textAlign: "center" }}>
        {status === "loading" && <Loading />}
        {status !== "loading" && hasNextPage && (
          <button onClick={() => dispatch(getCharacters(nextPage))}>
            Load More
          </button>
        )}
        {!hasNextPage && <div>No more characters to be shown</div>}
      </div>
    </div>
  );
}

export default Home;
