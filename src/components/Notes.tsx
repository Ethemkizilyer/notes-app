import * as React from "react";
import { Button, Card } from "react-bootstrap";
import { Note } from "../models/note.model";

interface INotsProps {
  note: Note;
  handleDelete: (id: string) => void;
}

const Nots: React.FunctionComponent<INotsProps> = ({ note, handleDelete }) => {
  return (
    <div className="mb-3">
      <Card style={{ backgroundColor: note.color }}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>

          <Card.Text>{note.text}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">{note.date}</Card.Subtitle>
          <Button
            className="mt-3"
            variant="danger"
            onClick={() => handleDelete(note.id)}
          >
            Sil
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Nots;
