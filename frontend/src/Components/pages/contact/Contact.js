import React, { useState } from 'react';
import '../contact/Contact.css';
import Loc from '../loc';
import { storage } from '../../../utils/firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";


const descriptionStyle = {
  flex: 1, // This will make the description take up the available space.
};

const imageStyle = {
  maxWidth: '100%', // Limit the maximum width to 100% of the container width
  maxHeight: '100%', // Limit the maximum height to 100% of the container height
};
const Contact = () => {
  const [file, setFile] = useState(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',

  });



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the data to the server
    console.log(formData, file);
    // Clear the form fields
    setFormData({
      // firstName: '',
      // lastName: '',
      email: '',
      phone: '',
      message: '',
    });
    const storageRef = ref(storage, `files/${file.name}`);
    uploadBytesResumable(storageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((link) => {
        console.log(link);
      })
    })

    // uploadTask.on("state_changed",

    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {
    //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //       console.log("File available at", downloadURL);
    //     });
    //   })
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

    <div className="contact-container">

      <div className="contact-section" style={{
        marginBottom: "auto",
        marginTop: "8rem",
        width: "30%"
      }}>

        <form onSubmit={handleSubmit}>
          
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
          <input type='file' name='file' onChange={(e) => {
            setFile(e.target.files[0])
          }} />
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
          <div style={{
            display: "flex",
            // justifyContent:"space-between",
            flexDirection: "column",
            gap: "4",
            height: "4rem",
          }}>
            <br></br>
            <i class="fa fa-envelope-open-o" aria-hidden="true"></i>

            <div> voltix@gmail.com</div>
            <br></br>
            <i className="fa fa-phone" aria-hidden="true"></i>
            <div>+912345465562</div>
            <br></br>
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <div>instagram</div>
            <br></br>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <div>Facebook</div>

           
          </div>
        </form>


        {/* Map Section */}

      </div>

      <div className="contact-section map-section">
        <div className="info-left" style={descriptionStyle}>

        </div>
        <Loc />
      </div>
    </div>
  );
}

export default Contact;