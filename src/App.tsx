import React, { useState } from 'react';

import './App.css';
import Header from './components/Header';
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
    <Header/>
    </>
  );
}

export default App;
