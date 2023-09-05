import React from 'react';
import { BrowserRouter as Router ,Route ,Routes , } from 'react-router-dom'
import Country from './Components/Country';
import Header from './Components/Header';
import Filter from './Components/Filter';
import CountryTwo from './Components/CountryTwo';
import Error from './Components/Error';
function App() {
  return (
    <Router>
      <Header />
  <Routes>
    <Route path='/' element={<Country />}></Route>
    <Route path="/:name" element={<CountryTwo />}></Route>
    <Route path='*' element={<Error />}></Route>
  </Routes>
</Router>
  );
}

export default App;
