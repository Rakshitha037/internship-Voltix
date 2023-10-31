









import React, { useState } from 'react';
import axios from 'axios';
import { storage } from '../../../utils/firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../../utils/baseUrl';
import '../services/createservice.css';

const Createservice = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [created_by, setCreatedBy] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCreateService = async () => {
    try {
      let imageUrl = '';  // Use local variable to store image URL

      // Upload the file
      if (file) {
        const storageRef = ref(storage, `service_files/${file.name}`);
        const snapshot = await uploadBytesResumable(storageRef, file);
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      // Create the service with entered data and the image URL
      const response = await axios.post(
        `${baseUrl}/services`,
        {
          name,
          description,
          image_url: imageUrl,  // Use the uploaded image URL
          created_by,
          // Add other fields as needed
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      if (response.status === 201) {
        navigate('/services');
        alert("Service created successfully");
      } else {
        alert("Error creating service");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="create-service-container">
      <div className="form-group">
        <label>Service Name:</label>
        <input type="text" placeholder="Enter Service Name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Description:</label>
        <textarea placeholder="Enter Service Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>

      <div className="form-group">
        <label>Created By:</label>
        <input type="text" placeholder="Enter Created By" value={created_by} onChange={(e) => setCreatedBy(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Upload File:</label>
        <input type="file" onChange={handleFileChange} />
      </div>

      <button type="button" onClick={handleCreateService}>
        Create Service
      </button>

      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Createservice;

