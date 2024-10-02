import { useState } from "react";
import { Button, Card, Flex, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../redux/notesSlice";
import ColorButtons from "./ColorButtons";
function ContentCard() {
  const [noteText, setNoteText] = useState();
  const dispatch = useDispatch();
  const selectedColor = useSelector((state) => state.radio.selectedValue);

  const { TextArea } = Input;
  const handleSubmit = () => {
    if (noteText.trim()) {
      dispatch(addNote({ note: noteText, color: selectedColor }));
      setNoteText("");
    }
  };
  return (
    <Card className="content">
      <TextArea
        className="textarea"
        placeholder="Enter your note here"
        value={noteText}
        onChange={(e) => {
          setNoteText(e.target.value);
        }}
      />
      <Flex justify="space-between" align="center">
        <ColorButtons />
        <Button
          style={{
            height: "50px",
            backgroundColor: "green",
            color: "white",
            fontSize: "16px",
            letterSpacing: "2px",
          }}
          onClick={handleSubmit}
        >
          Add Note
        </Button>
      </Flex>
    </Card>
  );
}

export default ContentCard;
