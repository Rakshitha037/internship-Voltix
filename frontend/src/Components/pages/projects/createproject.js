

import React, { useState } from 'react';
import axios from 'axios';
import { storage } from '../../../utils/firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../../utils/baseUrl';
import '../projects/createproject.css';

const Createproject = () => {
  const [newProjectName, setNewProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');
  const [team, setTeam] = useState('');
  const [status, setStatus] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [created_by, setCreatedBy] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

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
        // Upload the file
        if (file) {
          const storageRef = ref(storage, `project_files/${file.name}`);
          await uploadBytesResumable(storageRef, file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((link) => {
              setImageUrl(link); // Set the file URL in the state
            });
          });
        }

        navigate('/projects');
        alert("Project created successfully");
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
        <input type="text" placeholder="New Project Name" value={newProjectName} onChange={(e) => setNewProjectName(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Description:</label>
        <textarea placeholder="Project Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>

      <div className="form-group">
        <label>Start Date:</label>
        <input type="date" value={start_date} onChange={(e) => setStartDate(e.target.value)} />
      </div>

      <div className="form-group">
        <label>End Date:</label>
        <input type="date" value={end_date} onChange={(e) => setEndDate(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Team:</label>
        <input type="text" placeholder="Project Team" value={team} onChange={(e) => setTeam(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Status:</label>
        <input type="text" placeholder="Project Status" value={status} onChange={(e) => setStatus(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Image URL:</label>
        <input type="text" placeholder="Project Image URL" value={image_url} onChange={(e) => setImageUrl(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Created By:</label>
        <input type="text" placeholder="Created By" value={created_by} onChange={(e) => setCreatedBy(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Upload File:</label>
        <input type="file" onChange={handleFileChange} />
      </div>

      <button type="button" onClick={handleCreateProject}>
        Create Project
      </button>

      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Createproject;
