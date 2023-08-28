import { Outlet } from 'react-router-dom';
import Anouncement from '../components/Anouncement';
import Header from '../components/Header';

function RootLayout() {
  return (
    <>
      <Anouncement />
      <Header />
      <Outlet />
    </>
  );
}

export default RootLayout;
