import React, { useState }  from "react";
import AddDynamicUpvotes from "./pages/AddDynamicUpvotes";
import "./App.css";

function App() {
  let [Title, setTitle] = useState('Scrawlar Upvote');

  return (
    <div className="App">
      <div className="black-nav">
        <h1> { Title } </h1>
      </div>  
      <div className="frame">
        <AddDynamicUpvotes />  
      </div>       
    </div>
  );
}

export default App;
