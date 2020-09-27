import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video 
          channel="facudelucia" 
          description="Tik Tok with React" 
          url={"./assets/luchita.mp4"}
          shares={111}
          messages={111}
          likes={111}
          song="Música Original"
        />
        <Video 
          channel="facudelucia" 
          description="Tik Tok with React" 
          url={"./assets/luchita2.mp4"}
          shares={111}
          messages={111}
          likes={111}
          song="Música Original"
        />
        <Video 
          channel="facudelucia" 
          description="Tik Tok with React" 
          url={"./assets/luchita3.mp4"}
          shares={111}
          messages={111}
          likes={111}
          song="Música Original"
        />
      </div>
      
    </div>
  );
}

export default App;
