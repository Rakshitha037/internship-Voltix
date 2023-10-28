// import React, { Component } from "react";
// import '../feeds/Feeds.css'; // Import your CSS file

// class Feeds extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       firstName: "",
//       lastName: "",
//       email: "",
//       message: "",
//     };
//   }

//   handleInputChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     // You can add your form submission logic here
//     // For example, send the form data to a server
//     console.log("Form data submitted:", this.state);
//     // Clear the form fields
//     this.setState({
//       firstName: "",
//       lastName: "",
//       email: "",
//       message: "",
//     });
//   };

//   render() {
//     return (
//       <div className="centered-form"> {/* Apply centering CSS */}
        
//         <form onSubmit={this.handleSubmit} className="centered-form">
//           <div>
//             <label>First Name:</label>
//             <input
//               type="text"
//               name="firstName"
//               value={this.state.firstName}
//               onChange={this.handleInputChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Last Name:</label>
//             <input
//               type="text"
//               name="lastName"
//               value={this.state.lastName}
//               onChange={this.handleInputChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={this.state.email}
//               onChange={this.handleInputChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Message:</label>
//             <textarea
//               name="message"
//               rows="5"
//               value={this.state.message}
//               onChange={this.handleInputChange}
//               required
//             />
//           </div>
//           <button type="submit">Send</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Feeds;

// import React, { useState } from 'react';

// const Feeds = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const [testimonials, setTestimonials] = useState([
//     {
//       userName: 'John Doe',
//       feedback: 'Great company to work with. Excellent services!',
//       rating: 5,
//     },
//     {
//       userName: 'Jane Smith',
//       feedback: 'Highly recommended. The team is very professional.',
//       rating: 4,
//     },
//     {
//       userName: 'Bob Johnson',
//       feedback: 'Impressed with their quick response and quality work.',
//       rating: 5,
//     },
//   ]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send the data to the server
//     console.log(formData);
//     // Clear the form fields
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       message: '',
//     });
//   };

//   return (
//     <div>
//       <h2>Provide Feedback</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email ID"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone No"
//             value={formData.phone}
//             onChange={handleInputChange}
//           />
//         </div>
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleInputChange}
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>

//       <h2>Testimonials</h2>
//       <ul>
//         {testimonials.map((testimonial, index) => (
//           <li key={index}>
//             <strong>{testimonial.userName}</strong>
//             <p>{testimonial.feedback}</p>
//             {/* You can display rating stars here */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Feeds;



// import React, { useState } from 'react';

// const Feeds = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send the data to the server
//     console.log(formData);
//     // Clear the form fields
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       message: '',
//     });
//   };

//   return (
//     <div className="feeds-container">
//       <h2>Social Feeds</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email ID"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone No"
//             value={formData.phone}
//             onChange={handleInputChange}
//           />
//         </div>
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleInputChange}
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>

//       {/* Testimonials go here */}
//     </div>
//   );
// };

// export default Feeds;




// import React, { useState } from 'react';

// const Feeds = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const [testimonials, setTestimonials] = useState([
//     {
//       userName: 'John Doe',
//       feedback: 'Great company to work with. Excellent services!',
//       rating: 5,
//     },
//     {
//       userName: 'Jane Smith',
//       feedback: 'Highly recommended. The team is very professional.',
//       rating: 4,
//     },
//     {
//       userName: 'Bob Johnson',
//       feedback: 'Impressed with their quick response and quality work.',
//       rating: 5,
//     },
//   ]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send the data to the server
//     console.log(formData);
//     // Clear the form fields
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       message: '',
//     });
//   };

//   return (
//     <div className="feeds-container">
//       <h2>Social Feeds</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email ID"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone No"
//             value={formData.phone}
//             onChange={handleInputChange}
//           />
//         </div>
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleInputChange}
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>

//       <h2>Testimonials</h2>
//       <ul className="testimonials">
//         {testimonials.map((testimonial, index) => (
//           <li key={index}>
//             <strong>{testimonial.userName}</strong>
//             <p>{testimonial.feedback}</p>
//             {/* You can display rating stars here */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Feeds;


// import React, { useState } from 'react';

// const Feeds = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const [testimonials, setTestimonials] = useState([
//     {
//       userName: 'John Doe',
//       feedback: 'Great company to work with. Excellent services!',
//       rating: 5,
//     },
//     {
//       userName: 'Jane Smith',
//       feedback: 'Highly recommended. The team is very professional.',
//       rating: 4,
//     },
//     {
//       userName: 'Bob Johnson',
//       feedback: 'Impressed with their quick response and quality work.',
//       rating: 5,
//     },
//   ]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send the data to the server
//     console.log(formData);
//     // Clear the form fields
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       message: '',
//     });
//   };

//   return (
//     <div className="feeds-container">
//       <h2>Social Feeds</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <div>
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email ID"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone No"
//             value={formData.phone}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleInputChange}
//           ></textarea>
//         </div>
//         <button type="submit">Submit</button>
//       </form>

//       <h2>Testimonials</h2>
//       <ul className="testimonials">
//         {testimonials.map((testimonial, index) => (
//           <li key={index}>
//             <strong>{testimonial.userName}</strong>
//             <p>{testimonial.feedback}</p>
//             {/* You can display rating stars here */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Feeds;




// import React, { useState } from 'react';

// const Feeds = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const [testimonials, setTestimonials] = useState([
//     {
//       userName: 'John Doe',
//       feedback: 'Great company to work with. Excellent services!',
//       rating: 3,
//     },
//     {
//       userName: 'Jane Smith',
//       feedback: 'Highly recommended. The team is very professional.',
//       rating: 4,
//     },
//     {
//       userName: 'Bob Johnson',
//       feedback: 'Impressed with their quick response and quality work.',
//       rating: 5,
//     },
//   ]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send the data to the server
//     console.log(formData);
//     // Clear the form fields
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       message: '',
//     });
//   };

//   // Function to render rating stars
//   const renderRatingStars = (rating) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       stars.push(
//         <span key={i} className={i <= rating ? 'star filled' : 'star empty'}>
//           &#9733;
//         </span>
//       );
//     }
//     return stars;
//   };

//   return (
//     <div className="feeds-container">
//       <h2>Social Feeds</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email ID"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone No"
//             value={formData.phone}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleInputChange}
//           ></textarea>
//         </div>
//         <div className="form-group">
//           <button type="submit">Submit</button>
//         </div>
//       </form>

//       <h2>Testimonials</h2>
//       <ul className="testimonials">
//         {testimonials.map((testimonial, index) => (
//           <li key={index}>
//             <strong>{testimonial.userName}</strong>
//             <p>{testimonial.feedback}</p>
//             <div className="rating">{renderRatingStars(testimonial.rating)}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Feeds;


// import React, { useState } from 'react';

// const Feeds = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const [testimonials, setTestimonials] = useState([
//     {
//       userName: 'John Doe',
//       feedback: 'Great company to work with. Excellent services!',
//       rating: 3,
//     },
//     {
//       userName: 'Jane Smith',
//       feedback: 'Highly recommended. The team is very professional.',
//       rating: 4,
//     },
//     {
//       userName: 'Bob Johnson',
//       feedback: 'Impressed with their quick response and quality work.',
//       rating: 5,
//     },
//   ]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send the data to the server
//     console.log(formData);
//     // Clear the form fields
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       message: '',
//     });
//   };

//   // Function to render rating stars
//   const renderRatingStars = (rating) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       stars.push(
//         <span key={i} className={i <= rating ? 'star filled' : 'star empty'}>
//           &#9733;
//         </span>
//       );
//     }
//     return stars;
//   };

//   return (
//     <div className="feeds-container">
//       <h2>Social Feeds</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email ID"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone No"
//             value={formData.phone}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className="form-group">
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleInputChange}
//           ></textarea>
//         </div>

//         <div className="form-group">
//           <button type="submit">Submit</button>
//         </div>
//       </form>

//       <h2>Testimonials</h2>
//       <ul className="testimonials">
//         {testimonials.map((testimonial, index) => (
//           <li key={index}>
//             <strong>{testimonial.userName}</strong>
//             <p>{testimonial.feedback}</p>
//             <div className="rating">{renderRatingStars(testimonial.rating)}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Feeds;


// import React, { useState } from 'react';

// const Feeds = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const [testimonials, setTestimonials] = useState([
//     {
//       userName: 'John Doe',
//       feedback: 'Great company to work with. Excellent services!',
//       rating: 3,
//     },
//     {
//       userName: 'Jane Smith',
//       feedback: 'Highly recommended. The team is very professional.',
//       rating: 4,
//     },
//     {
//       userName: 'Bob Johnson',
//       feedback: 'Impressed with their quick response and quality work.',
//       rating: 5,
//     },
//   ]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send the data to the server
//     console.log(formData);
//     // Clear the form fields
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       message: '',
//     });
//   };

//   // Function to render rating stars
//   const renderRatingStars = (rating) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       stars.push(
//         <span key={i} className={i <= rating ? 'star filled' : 'star empty'}>
//           &#9733;
//         </span>
//       );
//     }
//     return stars;
//   };

//   return (
//     <div className="feeds-container">
//       <h2>Social Feeds</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleInputChange}
//           />
//           <br />
//         </div>

//         <div className="form-group">
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleInputChange}
//           />
//           <br />
//         </div>

//         <div className="form-group">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email ID"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           <br />
//         </div>

//         <div className="form-group">
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone No"
//             value={formData.phone}
//             onChange={handleInputChange}
//           />
//           <br />
//         </div>

//         <div className="form-group">
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleInputChange}
//           ></textarea>
//           <br />
//         </div>

//         <div className="form-group">
//           <button type="submit">Submit</button>
//         </div>
//       </form>

//       <h2>Testimonials</h2>
//       <ul className="testimonials">
//         {testimonials.map((testimonial, index) => (
//           <li key={index}>
//             <strong>{testimonial.userName}</strong>
//             <p>{testimonial.feedback}</p>
//             <div className="rating">{renderRatingStars(testimonial.rating)}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Feeds;


// import React, { Component } from "react";
// import '../feeds/Feeds.css'; // Import your CSS file

// class Feeds extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       firstName: "",
//       lastName: "",
//       email: "",
//       message: "",
//     };
//   }

//   handleInputChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     // You can add your form submission logic here
//     // For example, send the form data to a server
//     console.log("Form data submitted:", this.state);
//     // Clear the form fields
//     this.setState({
//       firstName: "",
//       lastName: "",
//       email: "",
//       message: "",
//     });
//   };

//   render() {
//     return (
//       <div className="centered-form"> {/* Apply centering CSS */}
        
//         <form onSubmit={this.handleSubmit} className="centered-form">
//           <div>
//             <label>First Name:</label>
//             <input
//               type="text"
//               name="firstName"
//               value={this.state.firstName}
//               onChange={this.handleInputChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Last Name:</label>
//             <input
//               type="text"
//               name="lastName"
//               value={this.state.lastName}
//               onChange={this.handleInputChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={this.state.email}
//               onChange={this.handleInputChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Message:</label>
//             <textarea
//               name="message"
//               rows="5"
//               value={this.state.message}
//               onChange={this.handleInputChange}
//               required
//             />
//           </div>
//           <button type="submit">Send</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Feeds;

// import React, { useState } from 'react';

// const Feeds = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const [testimonials, setTestimonials] = useState([
//     {
//       userName: 'John Doe',
//       feedback: 'Great company to work with. Excellent services!',
//       rating: 5,
//     },
//     {
//       userName: 'Jane Smith',
//       feedback: 'Highly recommended. The team is very professional.',
//       rating: 4,
//     },
//     {
//       userName: 'Bob Johnson',
//       feedback: 'Impressed with their quick response and quality work.',
//       rating: 5,
//     },
//   ]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send the data to the server
//     console.log(formData);
//     // Clear the form fields
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       message: '',
//     });
//   };

//   return (
//     <div>
//       <h2>Provide Feedback</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email ID"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone No"
//             value={formData.phone}
//             onChange={handleInputChange}
//           />
//         </div>
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleInputChange}
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>

//       <h2>Testimonials</h2>
//       <ul>
//         {testimonials.map((testimonial, index) => (
//           <li key={index}>
//             <strong>{testimonial.userName}</strong>
//             <p>{testimonial.feedback}</p>
//             {/* You can display rating stars here */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Feeds;



// import React, { useState } from 'react';

// const Feeds = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send the data to the server
//     console.log(formData);
//     // Clear the form fields
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       message: '',
//     });
//   };

//   return (
//     <div className="feeds-container">
//       <h2>Social Feeds</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email ID"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone No"
//             value={formData.phone}
//             onChange={handleInputChange}
//           />
//         </div>
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleInputChange}
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>

//       {/* Testimonials go here */}
//     </div>
//   );
// };

// export default Feeds;




// import React, { useState } from 'react';

// const Feeds = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const [testimonials, setTestimonials] = useState([
//     {
//       userName: 'John Doe',
//       feedback: 'Great company to work with. Excellent services!',
//       rating: 5,
//     },
//     {
//       userName: 'Jane Smith',
//       feedback: 'Highly recommended. The team is very professional.',
//       rating: 4,
//     },
//     {
//       userName: 'Bob Johnson',
//       feedback: 'Impressed with their quick response and quality work.',
//       rating: 5,
//     },
//   ]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send the data to the server
//     console.log(formData);
//     // Clear the form fields
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       message: '',
//     });
//   };

//   return (
//     <div className="feeds-container">
//       <h2>Social Feeds</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email ID"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone No"
//             value={formData.phone}
//             onChange={handleInputChange}
//           />
//         </div>
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleInputChange}
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>

//       <h2>Testimonials</h2>
//       <ul className="testimonials">
//         {testimonials.map((testimonial, index) => (
//           <li key={index}>
//             <strong>{testimonial.userName}</strong>
//             <p>{testimonial.feedback}</p>
//             {/* You can display rating stars here */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Feeds;


// import React, { useState } from 'react';

// const Feeds = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const [testimonials, setTestimonials] = useState([
//     {
//       userName: 'John Doe',
//       feedback: 'Great company to work with. Excellent services!',
//       rating: 5,
//     },
//     {
//       userName: 'Jane Smith',
//       feedback: 'Highly recommended. The team is very professional.',
//       rating: 4,
//     },
//     {
//       userName: 'Bob Johnson',
//       feedback: 'Impressed with their quick response and quality work.',
//       rating: 5,
//     },
//   ]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send the data to the server
//     console.log(formData);
//     // Clear the form fields
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       message: '',
//     });
//   };

//   return (
//     <div className="feeds-container">
//       <h2>Social Feeds</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <div>
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email ID"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone No"
//             value={formData.phone}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleInputChange}
//           ></textarea>
//         </div>
//         <button type="submit">Submit</button>
//       </form>

//       <h2>Testimonials</h2>
//       <ul className="testimonials">
//         {testimonials.map((testimonial, index) => (
//           <li key={index}>
//             <strong>{testimonial.userName}</strong>
//             <p>{testimonial.feedback}</p>
//             {/* You can display rating stars here */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Feeds;


// import React, { Component } from "react";
// import '../feeds/Feeds.css'; // Import your CSS file

// class Feeds extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       firstName: "",
//       lastName: "",
//       email: "",
//       message: "",
//     };
//   }

//   handleInputChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     // You can add your form submission logic here
//     // For example, send the form data to a server
//     console.log("Form data submitted:", this.state);
//     // Clear the form fields
//     this.setState({
//       firstName: "",
//       lastName: "",
//       email: "",
//       message: "",
//     });
//   };

//   render() {
//     return (
//       <div className="centered-form"> {/* Apply centering CSS */}
        
//         <form onSubmit={this.handleSubmit} className="centered-form">
//           <div>
//             <label>First Name:</label>
//             <input
//               type="text"
//               name="firstName"
//               value={this.state.firstName}
//               onChange={this.handleInputChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Last Name:</label>
//             <input
//               type="text"
//               name="lastName"
//               value={this.state.lastName}
//               onChange={this.handleInputChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={this.state.email}
//               onChange={this.handleInputChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Message:</label>
//             <textarea
//               name="message"
//               rows="5"
//               value={this.state.message}
//               onChange={this.handleInputChange}
//               required
//             />
//           </div>
//           <button type="submit">Send</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Feeds;

// import React, { useState } from 'react';

// const Feeds = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const [testimonials, setTestimonials] = useState([
//     {
//       userName: 'John Doe',
//       feedback: 'Great company to work with. Excellent services!',
//       rating: 5,
//     },
//     {
//       userName: 'Jane Smith',
//       feedback: 'Highly recommended. The team is very professional.',
//       rating: 4,
//     },
//     {
//       userName: 'Bob Johnson',
//       feedback: 'Impressed with their quick response and quality work.',
//       rating: 5,
//     },
//   ]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send the data to the server
//     console.log(formData);
//     // Clear the form fields
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       message: '',
//     });
//   };

//   return (
//     <div>
//       <h2>Provide Feedback</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email ID"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone No"
//             value={formData.phone}
//             onChange={handleInputChange}
//           />
//         </div>
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleInputChange}
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>

//       <h2>Testimonials</h2>
//       <ul>
//         {testimonials.map((testimonial, index) => (
//           <li key={index}>
//             <strong>{testimonial.userName}</strong>
//             <p>{testimonial.feedback}</p>
//             {/* You can display rating stars here */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Feeds;



// import React, { useState } from 'react';

// const Feeds = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send the data to the server
//     console.log(formData);
//     // Clear the form fields
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       message: '',
//     });
//   };

//   return (
//     <div className="feeds-container">
//       <h2>Social Feeds</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email ID"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone No"
//             value={formData.phone}
//             onChange={handleInputChange}
//           />
//         </div>
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleInputChange}
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>

//       {/* Testimonials go here */}
//     </div>
//   );
// };

// export default Feeds;




// import React, { useState } from 'react';

// const Feeds = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const [testimonials, setTestimonials] = useState([
//     {
//       userName: 'John Doe',
//       feedback: 'Great company to work with. Excellent services!',
//       rating: 5,
//     },
//     {
//       userName: 'Jane Smith',
//       feedback: 'Highly recommended. The team is very professional.',
//       rating: 4,
//     },
//     {
//       userName: 'Bob Johnson',
//       feedback: 'Impressed with their quick response and quality work.',
//       rating: 5,
//     },
//   ]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send the data to the server
//     console.log(formData);
//     // Clear the form fields
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       message: '',
//     });
//   };

//   return (
//     <div className="feeds-container">
//       <h2>Social Feeds</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email ID"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone No"
//             value={formData.phone}
//             onChange={handleInputChange}
//           />
//         </div>
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleInputChange}
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>

//       <h2>Testimonials</h2>
//       <ul className="testimonials">
//         {testimonials.map((testimonial, index) => (
//           <li key={index}>
//             <strong>{testimonial.userName}</strong>
//             <p>{testimonial.feedback}</p>
//             {/* You can display rating stars here */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Feeds;


// import React, { useState } from 'react';

// const Feeds = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const [testimonials, setTestimonials] = useState([
//     {
//       userName: 'John Doe',
//       feedback: 'Great company to work with. Excellent services!',
//       rating: 5,
//     },
//     {
//       userName: 'Jane Smith',
//       feedback: 'Highly recommended. The team is very professional.',
//       rating: 4,
//     },
//     {
//       userName: 'Bob Johnson',
//       feedback: 'Impressed with their quick response and quality work.',
//       rating: 5,
//     },
//   ]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send the data to the server
//     console.log(formData);
//     // Clear the form fields
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       message: '',
//     });
//   };

//   return (
//     <div className="feeds-container">
//       <h2>Social Feeds</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <div>
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email ID"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone No"
//             value={formData.phone}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleInputChange}
//           ></textarea>
//         </div>
//         <button type="submit">Submit</button>
//       </form>

//       <h2>Testimonials</h2>
//       <ul className="testimonials">
//         {testimonials.map((testimonial, index) => (
//           <li key={index}>
//             <strong>{testimonial.userName}</strong>
//             <p>{testimonial.feedback}</p>
//             {/* You can display rating stars here */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Feeds;



// import React, { Component } from "react";
// import '../feeds/Feeds.css'; // Import your CSS file

// class Feeds extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       firstName: "",
//       lastName: "",
//       email: "",
//       message: "",
//     };
//   }

//   handleInputChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     // You can add your form submission logic here
//     // For example, send the form data to a server
//     console.log("Form data submitted:", this.state);
//     // Clear the form fields
//     this.setState({
//       firstName: "",
//       lastName: "",
//       email: "",
//       message: "",
//     });
//   };

//   render() {
//     return (
//       <div className="centered-form"> {/* Apply centering CSS */}
        
//         <form onSubmit={this.handleSubmit} className="centered-form">
//           <div>
//             <label>First Name:</label>
//             <input
//               type="text"
//               name="firstName"
//               value={this.state.firstName}
//               onChange={this.handleInputChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Last Name:</label>
//             <input
//               type="text"
//               name="lastName"
//               value={this.state.lastName}
//               onChange={this.handleInputChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={this.state.email}
//               onChange={this.handleInputChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Message:</label>
//             <textarea
//               name="message"
//               rows="5"
//               value={this.state.message}
//               onChange={this.handleInputChange}
//               required
//             />
//           </div>
//           <button type="submit">Send</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Feeds;

// import React, { useState } from 'react';

// const Feeds = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const [testimonials, setTestimonials] = useState([
//     {
//       userName: 'John Doe',
//       feedback: 'Great company to work with. Excellent services!',
//       rating: 5,
//     },
//     {
//       userName: 'Jane Smith',
//       feedback: 'Highly recommended. The team is very professional.',
//       rating: 4,
//     },
//     {
//       userName: 'Bob Johnson',
//       feedback: 'Impressed with their quick response and quality work.',
//       rating: 5,
//     },
//   ]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send the data to the server
//     console.log(formData);
//     // Clear the form fields
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       message: '',
//     });
//   };

//   return (
//     <div>
//       <h2>Provide Feedback</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email ID"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone No"
//             value={formData.phone}
//             onChange={handleInputChange}
//           />
//         </div>
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleInputChange}
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>

//       <h2>Testimonials</h2>
//       <ul>
//         {testimonials.map((testimonial, index) => (
//           <li key={index}>
//             <strong>{testimonial.userName}</strong>
//             <p>{testimonial.feedback}</p>
//             {/* You can display rating stars here */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Feeds;



// import React, { useState } from 'react';

// const Feeds = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send the data to the server
//     console.log(formData);
//     // Clear the form fields
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       message: '',
//     });
//   };

//   return (
//     <div className="feeds-container">
//       <h2>Social Feeds</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email ID"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone No"
//             value={formData.phone}
//             onChange={handleInputChange}
//           />
//         </div>
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleInputChange}
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>

//       {/* Testimonials go here */}
//     </div>
//   );
// };

// export default Feeds;




// import React, { useState } from 'react';

// const Feeds = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const [testimonials, setTestimonials] = useState([
//     {
//       userName: 'John Doe',
//       feedback: 'Great company to work with. Excellent services!',
//       rating: 5,
//     },
//     {
//       userName: 'Jane Smith',
//       feedback: 'Highly recommended. The team is very professional.',
//       rating: 4,
//     },
//     {
//       userName: 'Bob Johnson',
//       feedback: 'Impressed with their quick response and quality work.',
//       rating: 5,
//     },
//   ]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send the data to the server
//     console.log(formData);
//     // Clear the form fields
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       message: '',
//     });
//   };

//   return (
//     <div className="feeds-container">
//       <h2>Social Feeds</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email ID"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone No"
//             value={formData.phone}
//             onChange={handleInputChange}
//           />
//         </div>
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleInputChange}
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>

//       <h2>Testimonials</h2>
//       <ul className="testimonials">
//         {testimonials.map((testimonial, index) => (
//           <li key={index}>
//             <strong>{testimonial.userName}</strong>
//             <p>{testimonial.feedback}</p>
//             {/* You can display rating stars here */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Feeds;


// import React, { useState } from 'react';

// const Feeds = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const [testimonials, setTestimonials] = useState([
//     {
//       userName: 'John Doe',
//       feedback: 'Great company to work with. Excellent services!',
//       rating: 5,
//     },
//     {
//       userName: 'Jane Smith',
//       feedback: 'Highly recommended. The team is very professional.',
//       rating: 4,
//     },
//     {
//       userName: 'Bob Johnson',
//       feedback: 'Impressed with their quick response and quality work.',
//       rating: 5,
//     },
//   ]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send the data to the server
//     console.log(formData);
//     // Clear the form fields
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       message: '',
//     });
//   };

//   return (
//     <div className="feeds-container">
//       <h2>Social Feeds</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <div>
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email ID"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone No"
//             value={formData.phone}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleInputChange}
//           ></textarea>
//         </div>
//         <button type="submit">Submit</button>
//       </form>

//       <h2>Testimonials</h2>
//       <ul className="testimonials">
//         {testimonials.map((testimonial, index) => (
//           <li key={index}>
//             <strong>{testimonial.userName}</strong>
//             <p>{testimonial.feedback}</p>
//             {/* You can display rating stars here */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Feeds;




import React, { useState } from 'react';
import './Feeds.css';
const Feeds = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [testimonials, setTestimonials] = useState([
    {
      userName: 'John Doe',
      feedback: 'Great company to work with. Excellent services!',
      rating: 3,
    },
    {
      userName: 'Jane Smith',
      feedback: 'Highly recommended. The team is very professional.',
      rating: 4,
    },
    {
      userName: 'Bob Johnson',
      feedback: 'Impressed with their quick response and quality work.',
      rating: 5,
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the data to the server
    console.log(formData);
    // Clear the form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  // Function to render rating stars
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
      <h2>Social Feeds</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone No"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>

      <h2>Testimonials</h2>
      <ul className="testimonials">
        {testimonials.map((testimonial, index) => (
          <li key={index}>
            <strong>{testimonial.userName}</strong>
            <p>{testimonial.feedback}</p>
            <div className="rating">{renderRatingStars(testimonial.rating)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feeds;




