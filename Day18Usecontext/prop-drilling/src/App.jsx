import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LearnMemo from './components/LearnMemo';
import LearnUseCallback from './components/LearnUseCallback';
// import DarkModeApp from './components/DarkModeApp';

function App() {
  return (
    <div>
      {/* <DarkModeApp/> */}
      <LearnMemo/>
      <hr/>
      <LearnUseCallback/>
      
    </div>
  )
}

export default App