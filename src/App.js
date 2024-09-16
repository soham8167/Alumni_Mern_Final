import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AlumniDashboard from './pages/alumni/Dashboard';
import StudentDashboard from './pages/student/Dashboard';
import AdminDashboard from './pages/admin/Dashboard';
import Layout from './components/layout/Layout'; // Import Layout

//import './styles/tailwind.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/alumni/dashboard" element={<Layout><AlumniDashboard /></Layout>} />
          <Route path="/student/dashboard" element={<Layout><StudentDashboard /></Layout>} />
          <Route path="/admin/dashboard" element={<Layout><AdminDashboard /></Layout>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
