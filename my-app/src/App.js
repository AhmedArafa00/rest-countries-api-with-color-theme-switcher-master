import React from 'react';
import { BrowserRouter as Router ,Route ,Routes , } from 'react-router-dom'
import Country from './Components/Country';
import Header from './Components/Header';
import Filter from './Components/Filter';
import CountryTwo from './Components/CountryTwo';
function App() {
  return (
<Router>
  <Routes>
    <Route path='/' element={<><Header /> <Filter /> <Country /></>}></Route>
    <Route path='/countryTwo/:name' element={<CountryTwo />}></Route>
  </Routes>
</Router>
  );
}

export default App;
