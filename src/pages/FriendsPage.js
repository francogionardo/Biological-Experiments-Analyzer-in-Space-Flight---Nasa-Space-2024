import React from 'react';
import './FriendsPage.css';

function FriendsPage() {
  const friends = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Williams'];

  return (
    <div className="friends">
      <h2>Your Friends</h2>
      <ul className="friend-list">
        {friends.map((friend, index) => (
          <li key={index} className="friend-item">
            {friend}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendsPage;
