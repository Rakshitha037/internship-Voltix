import React, { useState } from 'react';
import './Feeds.css';

const Feeds = () => {
  const [testimonials, setTestimonials] = useState([
    {
      name: 'John Doe',
      description: 'Great company to work with. Excellent services!',
      rating: 3,
      photo: 'https://tse1.mm.bing.net/th?id=OIP.mKLX1KVGstNfbArqJQLh9gHaHa&pid=Api&rs=1&c=1&qlt=95&w=112&h=112', // Add URL to John's photo
    },
    {
      name: 'Jane Smith',
      description: 'Highly recommended. The team is very professional.',
      rating: 4,
      photo: 'https://tse1.mm.bing.net/th?id=OIP.AwGBn0RaiFXEpXemdj-2LQHaLG&pid=Api&rs=1&c=1&qlt=95&w=77&h=116'
    },
    {
      name: 'Bob Johnson',
      description: 'Impressed with their quick response and quality work.',
      rating: 5,
   photo:'https://tse1.mm.bing.net/th?id=OIP.O8vv9O4Ku4HvFQyep-NXMAHaLG&pid=Api&rs=1&c=1&qlt=95&w=74&h=111'
    },
  ]);

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'star filled' : 'star empty'}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="feeds-container">
      
      <ul className="testimonials">
        {testimonials.map((testimonial, index) => (
          <li key={index}>
            <div className="testimonial-info">
              <div className="testimonial-photo">
                <img src={testimonial.photo} alt={`Photo of ${testimonial.name}`} />
              </div>
              <div className="testimonial-details">
                <strong>{testimonial.name}</strong>
                <p>{testimonial.description}</p>
                <div className="rating">{renderRatingStars(testimonial.rating)}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feeds;       

