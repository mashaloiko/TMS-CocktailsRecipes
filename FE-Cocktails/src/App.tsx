import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Catalog, Drinks, Footer, Header, Home, LogIn } from './Components';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/a" element={<Drinks />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
