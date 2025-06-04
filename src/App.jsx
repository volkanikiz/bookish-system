import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CreateProject from './pages/CreateProject';
import AddKeyword from './pages/AddKeyword';
import KeywordPerformance from './pages/KeywordPerformance';
import Analysis from './pages/Analysis';
import TopPages from './pages/TopPages';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';

export default function App() {
  const [user, setUser] = useState(() => {
    const u = localStorage.getItem('user');
    return u ? JSON.parse(u) : null;
  });

  const PrivateRoute = ({ children }) => {
    return user ? children : <Navigate to="/" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/projects/new" element={<PrivateRoute><CreateProject /></PrivateRoute>} />
        <Route path="/projects/:id" element={<PrivateRoute><KeywordPerformance /></PrivateRoute>} />
        <Route path="/projects/:id/keywords/new" element={<PrivateRoute><AddKeyword /></PrivateRoute>} />
        <Route path="/projects/:id/analysis" element={<PrivateRoute><Analysis /></PrivateRoute>} />
        <Route path="/projects/:id/top-pages" element={<PrivateRoute><TopPages /></PrivateRoute>} />
        <Route path="/notifications" element={<PrivateRoute><Notifications /></PrivateRoute>} />
        <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

