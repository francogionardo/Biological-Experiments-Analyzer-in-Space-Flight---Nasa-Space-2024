import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import './MarketplacePage.css';

function MarketplacePage() {
  const [listings, setListings] = useState([
    'Item 1: Old table',
    'Item 2: Second-hand car',
    'Item 3: Gaming computer'
  ]);
  const [newListing, setNewListing] = useState('');

  const handleCreateListing = () => {
    if (newListing) {
      setListings([newListing, ...listings]);
      setNewListing('');
    }
  };

  return (
    <div className="marketplace">
      <div className="marketplace-header">
        <TextField 
          fullWidth 
          variant="outlined" 
          placeholder="Search Marketplace" 
          className="search-input" 
        />
        <div>
          <TextField 
            variant="outlined" 
            placeholder="New listing..." 
            value={newListing}
            onChange={(e) => setNewListing(e.target.value)}
            className="new-listing-input"
          />
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleCreateListing} 
            className="create-listing-button"
          >
            + Create
          </Button>
        </div>
      </div>
      <div className="listing-section">
        {listings.map((listing, index) => (
          <div key={index} className="listing-box">
            {listing}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketplacePage;
