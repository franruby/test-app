import React from 'react';
import './App.css';

import Tasks from "./components/Tasks.js";
import Task from "./components/Task.js";
import Form from "./components/Form.js";
import Button from "./components/Button.js";

const  App = () => {

  return (
    <div className="App">
      <div className="App-content">
        <header>
          TODO App
        </header>
        <main>
          <Tasks />
          <Task 
            title="This´s a title"
            description="Lorem Ipsum"
            time={Date.now}
          />
        </main>

        <Form />

        <Button />

      </div>
    </div>
  );
}

export default App;
