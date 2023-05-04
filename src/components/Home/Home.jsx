import React from 'react';
import './Home.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';

const chefs = [
  {
    id: 1,
    name: 'John Doe',
    experience: 5,
    recipes: 10,
    likes: 100,
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    name: 'Jane Smith',
    experience: 8,
    recipes: 15,
    likes: 200,
    image: 'https://plus.unsplash.com/premium_photo-1661778021952-65997d03b2b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    experience: 12,
    recipes: 25,
    likes: 350,
    image: 'https://plus.unsplash.com/premium_photo-1661778003363-ccf7f0683124?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNoZWZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 4,
    name: 'Emily Jones',
    experience: 6,
    recipes: 12,
    likes: 150,
    image: 'https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 5,
    name: 'Sarah Davis',
    experience: 10,
    recipes: 20,
    likes: 300,
    image: 'https://media.istockphoto.com/id/1391235635/photo/portrait-of-black-female-chef-preparing-dish-tasting-food-and-enjoying-it-professional.jpg?b=1&s=170667a&w=0&k=20&c=oIDpaUFUuj3cFrELlrJgJvftBOZrYCWoLeEWjOQ_Q-c='
  },
  {
    id: 6,
    name: 'David Lee',
    experience: 7,
    recipes: 14,
    likes: 175,
    image: 'https://media.istockphoto.com/id/1365331387/photo/confident-chefs-colleagues-standing-with-arms-around-and-looking-at-camera-in-commercial.jpg?b=1&s=170667a&w=0&k=20&c=3wcqhRWBB4seyMttTrvOQp7EDYupotZP4o9120kAye8='
      
  }]
      
const ChefCard = ({ chef }) => {
  return (
    <div className="chef-card">
      <img src={chef.image} alt={chef.name} />
      <h2>{chef.name}</h2>
      <p>Years of experience: {chef.experience}</p>
      <p>Number of recipes: {chef.recipes}</p>
      <p>Likes: {chef.likes}</p>
      <button className='btn'>View Recipes</button>
    </div>
  );
};

ChefCard.propTypes = {
  chef: PropTypes.shape({
    name: PropTypes.string.isRequired,
    experience: PropTypes.number.isRequired,
    recipes: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};


const Home = () => {
  const [currentImg, setCurrentImg] = useState(0);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImg((currentImg) => (currentImg + 1) % 3);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className="homepage">
  <div className="banner-section">
    <h1>Welcome to our website</h1>
    <h2>Discover the best recipes from our top chefs</h2>
    <div className="slideshow">
    <img
            className={`slideshow-img ${currentImg === 0 ? 'active' : ''}`}
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Banner Image 1"
          />
    <img
            className={`slideshow-img ${currentImg === 1 ? 'active' : ''}`}
            src="https://plus.unsplash.com/premium_photo-1663852706199-52e7cd98468e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Banner Image 1"
          />
    <img
            className={`slideshow-img ${currentImg === 2 ? 'active' : ''}`}
            src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="Banner Image 1"
          />

    </div>
  </div>
  <div className="chef-section">
    <h2>Our Chefs:</h2>
    <div className="chef-cards">
      {chefs.map((chef) => (
        <ChefCard key={chef.id} chef={chef} />
      ))}
    </div>
  </div>
  <div className='last'>
      <section className="section">
        <h2>Our Services</h2>
        <p>
          We offer a wide range of services to help you with all your needs.
          Whether you need help with web design, software development, or
          digital marketing, we have the expertise to deliver results.
        </p>
        <button>Learn More</button>
      </section>
      <hr></hr>
      <section className="section">
        <h2 className='sec2'>Testimonials</h2>
        <div className="testimonial">
          <p>
            I was blown away by the quality of work and the level of
            professionalism. The team at XYZ really knows their stuff and they
            were a pleasure to work with.
          </p>
          <p>- John Smith, CEO of ABC Inc.</p>
        </div>
        <div className="testimonial">
          <p>
            Working with XYZ has been a game changer for our business. They
            helped us increase our online visibility and drive more traffic to
            our website. I highly recommend their services.
          </p>
          <p>- Jane Doe, Marketing Manager at DEF Corp.</p>
        </div>
      </section>
    </div>
  

</div>
    
  );
};

export default Home;
