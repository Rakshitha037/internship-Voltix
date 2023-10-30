


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../../utils/baseUrl';
import '../projects/createproject.css';
const CreateProject = () => {
  const [newProjectName, setNewProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');
  const [team, setTeam] = useState('');
  const [status, setStatus] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [created_by, setCreatedBy] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const handleCreateProject = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/projects`,
        {
          name: newProjectName,
          description,
          start_date,
          end_date,
          team,
          status,
          image_url,
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
        navigate('/projects');
        alert("Project created successfully");
        // You can navigate to another page if needed
      } else {
        alert("Error creating project");
      }
    } catch (error) {
      setError(error.message);
    }
  };
 
  

  return (
    <div className="create-project-container">
     
      <div className="form-group">
        <label>Project Name:</label>
        <input type="text" placeholder="New Project Name" onChange={(e) => setNewProjectName(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Description:</label>
        <textarea placeholder="Project Description" onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>

      <div className="form-group">
        <label>Start Date:</label>
        <input type="date" onChange={(e) => setStartDate(e.target.value)} />
      </div>

      <div className="form-group">
        <label>End Date:</label>
        <input type="date" onChange={(e) => setEndDate(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Team:</label>
        <input type="text" placeholder="Project Team" onChange={(e) => setTeam(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Status:</label>
        <input type="text" placeholder="Project Status" onChange={(e) => setStatus(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Image URL:</label>
        <input type="text" placeholder="Project Image URL" onChange={(e) => setImageUrl(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Created By:</label>
        <input type="text" placeholder="Created By" onChange={(e) => setCreatedBy(e.target.value)} />
      </div>

      <button type="button" onClick={handleCreateProject}>Create Project</button>

      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default CreateProject;
