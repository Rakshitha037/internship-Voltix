// // import ReactDOM from 'react-dom';

// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import '../login/Login.css'


// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleLogin = async () => {
// //     try {
// //       const response = await axios.post('http://localhost:3000/login', {
// //         email,
// //         password,
// //       });

// //       // Handle the response data accordingly
// //       if (response.status === 200) {
// //         const { accessToken, refreshToken, userID, message } = response.data;
// //         console.log('Login successful:', message);

// //         // Store tokens or perform other actions as needed
// //       } else {
// //         console.error('Login failed:', response.data);
// //         // Handle login failure, show error message, etc.
// //       }
// //     } catch (error) {
// //       console.error('Error during login:', error);
// //     }
// //   };

// //   return (
// //     <div className="d-flex justify-content-center align-items-center vh-100" id="image">
// //       <div className="border border-3 border-dark p-3 bg-white">
// //         <form>
// //           <h2 className="text-center text-primary">Login</h2>
// //           <div className="mb-3">
// //             <label htmlFor='email'>Email:</label>
// //             <input type="email" placeholder="Enter your email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
// //           </div>
// //           <div className="mb-3">
// //             <label>Password:</label>
// //             <input type="password" placeholder="Enter Password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
// //           </div>
// //           <div className="d-grid">
// //             <button type="button" className="btn btn-success" onClick={handleLogin}>Login</button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;






// // Login.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:3000/login', {
//         email,
//         password,
//       });

//       if (response.status === 200) {
//         console.log('Login successful:', response.data);
//         // You may redirect to another page or perform other actions
//       } else {
//         console.error('Login failed:', response.data);
//         setError('Login failed. Please check your credentials.'); // Set error message
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       setError('An error occurred. Please try again later.'); // Set generic error message
//     }
//   };

//   return (
//     <div className="login-container">
      
//       <form>
//         <div className="form-group">
//           <label>Email:</label>
//           <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
//         </div>

//         <div className="form-group">
//           <label>Password:</label>
//           <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
//         </div>

//         <button type="button" className="btn btn-primary" onClick={handleLogin}>Login</button>
//       </form>

//       {error && <div className="error-message">{error}</div>}
//     </div>
//   );
// };

// export default Login;









// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password,
      });

      if (response.status === 200) {
        console.log('Login successful:', response.data);
        localStorage.setItem("token", response.data.token);

        // Set the success message and clear any previous error
        setSuccessMessage('User logged in successfully');
        setError('');
        
        // You may redirect to another page or perform other actions

      } else {
        console.error('Login failed:', response.data);
        setError('Login failed. Please check your credentials.'); // Set error message
        setSuccessMessage(''); // Clear success message
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred. Please try again later.'); // Set generic error message
      setSuccessMessage(''); // Clear success message
    }
  };

  return (
    <div className="login-container">
      
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="button" className="btn btn-primary" onClick={handleLogin}>Login</button>
      </form>

      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default Login;