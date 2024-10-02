import { Input } from "antd";
import { useDispatch } from "react-redux";
import { updateSearchTerm } from "../redux/notesSlice";
function SearchForm() {
  const dispatch = useDispatch();
  return (
    <>
      <Input
        className="search"
        onChange={(e) => {
          dispatch(updateSearchTerm(e.target.value));
        }}
        autoFocus
        size="large"
        placeholder="Search for a note"
      />
    </>
  );
}

export default SearchForm;
