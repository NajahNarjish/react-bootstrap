import React from 'react';
import './App.css';
import {Button} from "react-bootstrap";
import News from './components/News/News';
import Header from './components/Header/Header';
import TopHeadline from './components/TopHeadline/TopHeadline';

function App() {
  return (
    <div >
      <h1>Breaking News</h1>
      <TopHeadline></TopHeadline>
      <Button variant="outline-primary">Primary</Button>{' '}

      <Header></Header>
      <News></News>
            
    </div>
  );
}

export default App;
