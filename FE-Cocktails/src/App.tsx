import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Catalog, Drinks, Footer, Header, Home, LogIn, SingleDrink } from './Components';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:letter" element={<Drinks />} />
        <Route path="/catalog/:letter/:drink" element={<SingleDrink />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
