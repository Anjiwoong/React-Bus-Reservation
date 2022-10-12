import { Route, Routes } from 'react-router-dom';
import Header from './components/UI/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Mypage from './pages/Mypage';
import Lookup from './pages/Lookup';
import Seat from './pages/Seat';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/lookup" element={<Lookup />} />
        <Route path="/seat" element={<Seat />} />
      </Routes>
    </>
  );
};

export default App;
