






import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseUrl from '../../../utils/baseUrl';
import { useNavigate } from 'react-router-dom';

import '../services/Services.css'; // Replace with your actual CSS file
import './Services.css'; // Replace with your actual CSS file

const Services = () => {
  const [serviceData, setServiceData] = useState(null);
  const [error, setError] = useState(null);
  const [description, setDescription] = useState('');
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/services`);
        setServiceData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchServiceData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${baseUrl}/services/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });

      if (response.status === 200) {
        alert("Service deleted");
        window.location.reload();
      } else {
        alert("Error deleting service");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const response = await axios.put(
        `${baseUrl}/services/${id}`,
        { description: description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        alert("Service updated");
        window.location.reload();
      } else {
        alert("Error updating service");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleAddService = () => {
    // Implement the logic for adding a new service
    // This could involve navigating to a different page or showing a modal, for example
    navigate('/createservice');
  };

  return (
    <div className="services-container">
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {serviceData && (
        <div className="card-container">
          {token && (
            <div className="card service-card add-service-card" onClick={handleAddService}>
              {/* <div className="card-body"> */}
                <h5 className="card-title">+</h5>
                {/* <p className="card-text">Add Service</p> */}
              </div>
            // </div>
          )}
          {serviceData?.map((service) => (
            <div key={service.id} className="card service-card">
              {/* Add your service card structure here */}
              <div className="card-body">
                <h5 className="card-title">{service.name}</h5>
                <p className="card-text">{service.description}</p>
                <input type="text" defaultValue={service.description} onChange={(e) => setDescription(e.target.value)} />
                {token && (
                  <div>
                    <button onClick={() => handleUpdate(service._id)} className="btn btn-primary">Update</button>
                    <br></br>
                    <button onClick={() => handleDelete(service._id)} className="btn btn-danger">Delete</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
