import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Catalog, Drinks, Favourite, Footer, Header, Home, LogIn, NotFound, SingleDrink } from './Components';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:letter" element={<Drinks />} />
        <Route path="/catalog/:letter/:id" element={<SingleDrink />} />
        <Route path="/favourite" element={<Favourite />}/>
        <Route path="/login" element={<LogIn />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
