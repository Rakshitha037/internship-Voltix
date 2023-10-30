import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../../utils/baseUrl';
import '../services/createservice.css';

const CreateService = () => {
  const [serviceName, setServiceName] = useState('');
  const [description, setDescription] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [created_by, setCreatedBy] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleCreateService = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/services`,
        {
          name: serviceName,
          description,
          image_url,
          created_by
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
        // You can navigate to another page if needed
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
        <input type="text" placeholder="New Service Name" onChange={(e) => setServiceName(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Description:</label>
        <textarea placeholder="Service Description" onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>

      
      

      
      <div className="form-group">
        <label>Image URL:</label>
        <input type="text" placeholder="Service Image URL" onChange={(e) => setImageUrl(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Created By:</label>
        <input type="text" placeholder="Created By" onChange={(e) => setCreatedBy(e.target.value)} />
      </div>

      <button type="button" onClick={handleCreateService}>Create Service</button>

      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default CreateService;
