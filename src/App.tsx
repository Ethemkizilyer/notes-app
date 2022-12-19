import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './App.css';
import CreateNotes from './components/CreateNotes';
import Header from './components/Header';
import NotesList from './components/NotesList';
import { Note } from './models/note.model';



function App() {
  // console.log((new Date).toString());
  const [nots,setNots]=useState<Note[]>([{
    id:(new Date).toString(),
    title:"BAKARLAR",
    text:"Buraya bakarlar mı?",
    color:"#dfdfdf",
    date:(new Date).toString()
  }])
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList nots={nots} setNots={setNots} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes nots={nots} setNots={setNots} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
