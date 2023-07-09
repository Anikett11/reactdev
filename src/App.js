import React from 'react';
import "./App.css";
import WebcamCapture from './WebcamCapture';
import Preview from './Preview';
import {BrowserRouter as Router,Switch,Routes, Route} from "react-router-dom";
import Chats from './Chats';

function App() {
  return (
    <div className='app'>
    <Router>
    
      <>
      <img 
      className="app__logo" src="http://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg" alt=""/>
   <div className='app__body'>
        <div className='app__bodyBackground'>

        <switch>
         <Routes>
        <Route path="/chats" element={<Chats />} />
      </Routes>
           <Routes>
        <Route path="/preview" element={<Preview />} />
      </Routes>

        <Routes>
        <Route exact path="/" element={<WebcamCapture/>}/>
          
           
          
        </Routes>
          </switch>
        </div>
        
      </div>
      </>
    </Router>
  
      
    </div>
  );
}

export default App;