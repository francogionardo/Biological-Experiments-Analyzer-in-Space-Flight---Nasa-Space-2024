import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import './HomePage.css';

function HomePage() {
  const [status, setStatus] = useState('');
  const [posts, setPosts] = useState([
    'Post 1: Exciting news!',
    'Post 2: Beautiful weather today!',
    'Post 3: Just finished a new project!'
  ]);

  const handleStatusSubmit = () => {
    if (status) {
      setPosts([status, ...posts]);
      setStatus('');
    }
  };

  return (
    <div className="home">
      <div className="home-header">
        <TextField 
          fullWidth 
          variant="outlined" 
          placeholder="What's on your mind?" 
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="status-input"
        />
        <div className="actions">
          <Button variant="contained" color="primary" onClick={handleStatusSubmit}>
            Post
          </Button>
        </div>
      </div>
      <div className="story-section">
        <div className="story-box">Story 1</div>
        <div className="story-box">Story 2</div>
        <div className="story-box">Story 3</div>
        <div className="story-box">Story 4</div>
      </div>
      <div className="post-section">
        {posts.map((post, index) => (
          <div key={index} className="post-box">
            {post}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
