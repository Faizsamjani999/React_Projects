import React from 'react';
import { Card } from 'react-bootstrap';

function Dashboard() {
  return (
    <div className="content p-4 md:p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="shadow-lg p-4 mb-4">
          <Card.Body>
            <Card.Title>Total Sales</Card.Title>
            <Card.Text>$10,000</Card.Text>
          </Card.Body>
        </Card>
        <Card className="shadow-lg p-4 mb-4">
          <Card.Body>
            <Card.Title>Total Orders</Card.Title>
            <Card.Text>200 Orders</Card.Text>
          </Card.Body>
        </Card>
        <Card className="shadow-lg p-4 mb-4">
          <Card.Body>
            <Card.Title>Customer Satisfaction</Card.Title>
            <Card.Text>90%</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
