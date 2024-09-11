import React from 'react';
import Card from './components/Card';
import myImage from 'src\assets\eight8.jpeg';
import myImage from 'src\assets\five5.jpeg';
import myImage from 'src\assets\four4.jpeg';

function App() {
  const cardsData = [
    {
      title: 'Beach Resort',
      features: ['Ocean View', 'Private Beach', 'Free WiFi'],
      image: 'https://via.placeholder.com/300',
    },
    {
      title: 'Mountain Retreat',
      features: ['Mountain View', 'Hiking Trails', 'Fireplace'],
      image: 'https://via.placeholder.com/300',
    },
    {
      title: 'City Hotel',
      features: ['City Center', 'Free Breakfast', 'Fitness Center'],
      image: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-center my-8">Travel Destinations</h1>
      <div className="flex flex-wrap justify-center">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            features={card.features}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
