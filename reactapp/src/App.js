import './default.scss'
import { Registration } from './pages/authorization/Registration'
import { Login } from './pages/authorization/Login'
import { Home } from './pages/home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
