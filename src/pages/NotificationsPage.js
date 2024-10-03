import React from 'react';
import './NotificationsPage.css';

function NotificationsPage() {
  const notifications = [
    'You have a new friend request!',
    'Someone commented on your post.',
    'You have a new message from Jane.'
  ];

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <ul className="notification-list">
        {notifications.map((notification, index) => (
          <li key={index} className="notification-item">
            {notification}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationsPage;
