import * as React from "react";
import { setSyntheticLeadingComments } from "typescript";
import { Note } from "../models/note.model";
import Nots from "./Notes";

interface INotesListProps {
  nots: Note[];
  setNots: React.Dispatch<React.SetStateAction<Note[]>>;
  saveTasks: () => void;
}

const NotesList: React.FC<INotesListProps> = ({ nots, setNots,saveTasks }) => {
  const handleDelete = (id: string) => {
    console.log(id);
    setNots(nots.filter((note) => note.id !== id));
    saveTasks()
  };

  const renderNots = (): JSX.Element[] => {
    return nots.map((note) => {
      return <Nots key={note.id} note={note} handleDelete={handleDelete} />;
    });
  };

  return (
    
     <>
     {nots.length > 0 && <><h2 className="mt-3">Notlar</h2>
      <div>{renderNots()}</div></>}
      </>
    
  );
};

export default NotesList;
