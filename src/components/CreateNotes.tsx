import * as React from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Note } from "../models/note.model";

interface ICreateNotesProps {
  nots: Note[];
  setNots: React.Dispatch<React.SetStateAction<Note[]>>;
  saveTasks: () => void;
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({
  nots,
  setNots,
  saveTasks
}) => {
  const [error, setError] = React.useState<string>("");
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    // hiçbirşey return etmeyeceği için void dedim
    e.preventDefault();

    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("Eksik giriş!!!");
    }
    setError("");
    setNots([
      ...nots,
      {
        id: new Date().toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: new Date().toString(),
      },
    ]);
    
    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";
  };

saveTasks();

  return (
    <>
      <h2 className="mt-3">Not Oluştur</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Başlık</Form.Label>
          <Form.Control
            type="text"
            placeholder="Başlık giriniz..."
            ref={titleRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>İçerik</Form.Label>
          <Form.Control
            as="textarea"
            type="textarea"
            rows={3}
            placeholder="Notunuzu giriniz..."
            ref={textRef}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="colorInput">Kart Rengi</Form.Label>
          <Form.Control
            type="color"
            id="colorInput"
            defaultValue="#dfdfdf"
            title="Renk seçiniz"
            ref={colorRef}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Ekle
        </Button>
      </Form>
    </>
  );
};

export default CreateNotes;
