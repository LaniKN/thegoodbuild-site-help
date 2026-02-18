import logo from './logo.svg';
import './App.css';
import { HeaderBar } from './components/HeaderBar.tsx';
import { BrowserRouter, Router, Routes } from 'react-router';
import { SiteLayout } from './pages/SiteLayout.tsx';

function App() {
  return (
    <BrowserRouter>
      <SiteLayout/>
    </BrowserRouter>
  );
}

export default App;
