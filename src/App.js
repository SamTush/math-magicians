import { Routes, Route } from 'react-router-dom';
import DisplayCal from './components/calculator';
import Quotes from './components/quotes';
import NavBar from './components/nav-bar';
import Home from './components/home';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<DisplayCal />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </>
  );
}

export default App;
