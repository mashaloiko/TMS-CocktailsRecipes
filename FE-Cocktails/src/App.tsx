import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Drinks, Header, Home, LogIn } from './Components';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Drinks />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
