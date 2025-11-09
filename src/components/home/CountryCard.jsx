// CountryCard.js
import React from 'react';
import { Card } from 'react-bootstrap';

const CountryCard = ({ country }) => {
  return (
    <Card className="h-100 shadow-sm country-card">
      <div className="flag-container" style={{ height: '160px', overflow: 'hidden' }}>
        <Card.Img 
          variant="top" 
          src={country.flag} 
          style={{ 
            height: '100%', 
            width: '100%', 
            objectFit: 'cover'
          }} 
        />
      </div>
      <Card.Body className="d-flex flex-column p-3">
        <Card.Title className="h6 fw-bold mb-2" style={{ fontSize: '0.95rem' }}>
          {country.name}
        </Card.Title>
        <Card.Text className="text-muted mb-0" style={{ fontSize: '0.85rem' }}>
          <strong>Region:</strong> {country.region}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;