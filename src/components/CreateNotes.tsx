import * as React from "react";
import { Button, Form } from "react-bootstrap";

interface ICreateNotesProps {}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = (props) => {
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);
  return (
    <>
      <h2>Not Oluştur</h2>
      <Form className="mt-3 mb-3">
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Başlık giriniz..."
            ref={titleRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Text</Form.Label>
          <Form.Control
            as="textarea"
            type="textarea"
            rows={3}
            placeholder="Notunuzu giriniz..."
            ref={textRef}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="colorInput">Cart Rengi</Form.Label>
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
