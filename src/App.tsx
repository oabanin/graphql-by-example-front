import React from 'react';
import './App.css';
import { Link } from "react-router-dom";



function App() {
  return (
      <div>
          <div><Link to={`/jobs`}>Jobs</Link></div>
      </div>
  );
}

export default App;
