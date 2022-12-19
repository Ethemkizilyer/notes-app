import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./App.css";
import CreateNotes from "./components/CreateNotes";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import { Note } from "./models/note.model";

function App() {
  // console.log((new Date).toString());

  function loadTasks(): Note[] {
    const taskJSON = localStorage.getItem("TASKS");
    if (taskJSON == null) return [];
    return JSON.parse(taskJSON);
  }

  const [nots, setNots] = useState<Note[]>(loadTasks());

//   useEffect(()=>{
// setNots(loadTasks())
//   },[])



  const saveTasks = (): void => {
    localStorage.setItem("TASKS", JSON.stringify(nots));
  };

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList nots={nots} setNots={setNots} saveTasks={saveTasks} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes nots={nots} setNots={setNots} saveTasks={saveTasks} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
