import { Row, Col, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { destroyNote } from "../redux/notesSlice";
function NoteGrid() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);
  const searchTerm = useSelector((state) => state.notes.searchTerm);
  const handleDestroy = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(destroyNote(id));
    }
  };
  const filteredNotes = notes.filter((note) =>
    note.note.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Row gutter={[8, 16]} className="grid">
      {filteredNotes &&
        filteredNotes.map((note) => (
          <Col key={note.id} span={8}>
            <Card className="note_card" style={{ backgroundColor: note.color }}>
              <p className="note_text">{note.note}</p>
              <p
                className="footer_text"
                onClick={() => {
                  handleDestroy(note.id);
                }}
              >
                click to delete
              </p>
            </Card>
          </Col>
        ))}
      {/* <Col span={8} className='grid_col'><div>WHUDDUP</div></Col> */}
    </Row>
  );
}

export default NoteGrid;
