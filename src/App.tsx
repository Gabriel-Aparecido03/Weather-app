import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import './styles/global.css'
import { WeatherContextProvider } from './context/weatherContext';
import { Home } from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <WeatherContextProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </WeatherContextProvider>
    </BrowserRouter>
  );
}

export default App;
