import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './Main';
import Sign from './Sign';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="Sign" element={<Sign/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;