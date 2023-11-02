// import React from 'react';
// import { Link } from "react-router-dom";
// import '../Components/Navbar.css'
// import './Navbar.css';
// const Navbar = () => {
//   const navbarStyle = {
//     position: 'fixed',
//     top: '0',
//     width: '100%',
//     zIndex: '1000', // Set a high z-index to ensure it's on top of other elements
//   };

//   return (
//     <nav className="navbar navbar-dark navbar-expand-md bg-transparent" style={navbarStyle}>
//     <div className="container">
//       <Link className="navbar-brand" to="/">
//         <img src="https://www.voltixsolution.com/assets/img/voltix_logo.png" alt="Loading" height="50px" />
//       </Link>
//       <ul className="navbar-nav ml-auto">
//         <li className="nav-item">
//           <Link className="nav-link custom-text-color" to="/">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link custom-text-color" to="/About">About</Link>
//         </li>
//           <li className="nav-item">
//             <Link className="nav-link black-text" to="/contact">Contact</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link black-text" to="/services">Services</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link black-text" to="/projects">Projects</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link black-text" to="/feeds">Feeds</Link>
//           </li>
//           </ul>
//     <Link to="/login" className="btn btn-info mx-1">Login</Link>
//   </div>
// </nav>
//   );
// }

// export default Navbar;







// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../Components/Navbar.css';
// import './Navbar.css';

// const Navbar = () => {
//   const navbarStyle = {
//     position: 'fixed',
//     top: '0',
//     width: '100%',
//     zIndex: '1000',
//   };

//   return (
//     <nav className="navbar navbar-expand-md navbar-dark bg-transparent" style={navbarStyle}>
//       <div className="container">
//         <Link className="navbar-brand" to="/">
//           <img src="https://www.voltixsolution.com/assets/img/voltix_logo.png" alt="Loading" height="50px" />
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <Link className="nav-link custom-text-color" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link custom-text-color" to="/About">
//                 About
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link black-text" to="/contact">
//                 Contact
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link black-text" to="/services">
//                 Services
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link black-text" to="/projects">
//                 Projects
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link black-text" to="/feeds">
//                 Feeds
//               </Link>
//             </li>
//           </ul>
//           <Link to="/login" className="btn btn-info mx-1">
//             Login
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Components/Navbar.css';
import './Navbar.css';

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const navbarStyle = {
    position: 'fixed',
    top: '0',
    width: '100%',
    zIndex: '1000',
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-white" style={navbarStyle}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="https://www.voltixsolution.com/assets/img/voltix_logo.png" alt="Loading" height="50px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} id="navbarNav">
          <ul className={`navbar-nav ml-auto ${isNavCollapsed ? 'mr-auto' : ''}`}>
            <li className="nav-item">
              <Link className="nav-link custom-text-color" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-text-color" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link black-text" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link black-text" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link black-text" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link black-text" to="/feeds">
                Feeds
              </Link>
            </li>
          </ul>
          <Link to="/login" className="btn btn-info mx-1">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

