import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaHome, FaStore, FaUserFriends, FaBell, FaComment } from 'react-icons/fa';
import HomePage from './pages/HomePage';
import MarketplacePage from './pages/MarketplacePage';
import FriendsPage from './pages/FriendsPage';
import NotificationsPage from './pages/NotificationsPage';
import Chat from './pages/Chat'; // Import Chat page
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="logo">FB Clone</div>
          <Link to="/" className="menu-item">
            <FaHome /> Home
          </Link>
          <Link to="/marketplace" className="menu-item">
            <FaStore /> Marketplace
          </Link>
          <Link to="/friends" className="menu-item">
            <FaUserFriends /> Friends
          </Link>
          <Link to="/notifications" className="menu-item">
            <FaBell /> Notifications
          </Link>
          <Link to="/chat" className="menu-item">
            <FaComment /> Chat
          </Link>
        </div>

        {/* Main content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/friends" element={<FriendsPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/chat" element={<Chat />} /> {/* Chat page route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
