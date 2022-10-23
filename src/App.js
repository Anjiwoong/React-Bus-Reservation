import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/UI/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Mypage from './pages/Mypage';
import Lookup from './pages/Lookup';
import Seat from './pages/Seat';
import { useContext, useEffect } from 'react';
import AuthContext from './store/auth-context';
import ErrorPage from './pages/ErrorPage';
import { useSelector } from 'react-redux';
import { firestore } from './firebase/firebaseInit';

const App = () => {
  const authCtx = useContext(AuthContext);

  const PrivateRoute = ({ children }) => {
    if (!authCtx.isLoggedIn) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  const { allCheck } = useSelector(state => state.ticket);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={authCtx.isLoggedIn ? <Navigate to="/error" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authCtx.isLoggedIn ? <Navigate to="/error" /> : <Signup />}
        />
        <Route
          path="/mypage"
          element={
            <PrivateRoute>
              <Mypage />
            </PrivateRoute>
          }
        />
        {allCheck && <Route path="/home/lookup" element={<Lookup />} />}
        {allCheck && <Route path="/home/lookup/seat" element={<Seat />} />}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
