
// import './App.css';
// import { Map } from './Components/Map';
// export default function App() {
//   return (
//     Map()
//   );
// }

// src/App.js
// src/App.js
import React, { Suspense } from 'react';
import './App.css';

import Map from './Pages/Map';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Microspace</h1>
      </header>
      <section className="App-section">
        <Suspense fallback={<div>Loading...</div>}>
          <Map />
        </Suspense>
      </section>
      <footer className="App-footer">
        <h1>Good bye</h1>
      </footer>
    </div>
  );
};

export default App;




