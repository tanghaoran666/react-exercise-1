import React from 'react';
import './App.scss';
import Hello from './components/Hello';
// import ChartName from './components/ChartName';
import Educations from './components/Educations';

function App() {
  return (
    <div className="app">
      <Hello />
      <h3>ABOUT ME</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
        non, dolorem, cumque distinctio magni quam expedita velit laborum sunt
        amet facere témpora ut fuga aliquam ad asperiores voluptatem dolorum!
        Quasi.
      </p>
      <h3>EDUCATION</h3>
      <Educations />
    </div>
  );
}

export default App;
