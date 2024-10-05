import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { GoogleGenerativeAI } from '@google/generative-ai'; // Import the Gemini SDK
import './Chat.css';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // Initialize the Gemini API client with your API key from environment variables
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage = { text: input, type: 'user' };
      setMessages([...messages, userMessage]);
      setInput('');

      setLoading(true);

      try {
        // Create a model instance
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        // Generate content using the Gemini API
        const response = await model.generateContent(input);

        // Extract and display the response
        const botMessage = { text: response.response.text(), type: 'gemini' };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        const errorMessage = { text: 'Error connecting to Gemini API', type: 'error' };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }

      setLoading(false);
    }
  };

  return (
    <div className="chat-page">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="input-section">
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleSendMessage();
          }}
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage} disabled={loading}>
          {loading ? 'Loading...' : 'Send'}
        </Button>
      </div>
    </div>
  );
}

export default Chat;
