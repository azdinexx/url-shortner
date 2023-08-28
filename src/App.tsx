import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import RootLayout from './Layouts/layout';

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
