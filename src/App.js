import { Routes, Route } from 'react-router-dom';

import Home from './views/Home.js'
import Project from './views/Project.js'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project" element={<Project />}></Route>
      </Routes>
    </div>
  );
}

export default App;
