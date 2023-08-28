import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Pricing from './pages/pricing';
import RootLayout from './Layouts/layout';

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Home />} />
        <Route path='/Pricing' element={<Pricing />} />
      </Route>
    </Routes>
  );
}

export default App;
