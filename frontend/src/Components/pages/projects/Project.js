// // src/components/ProjectDetails.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../projects/Project.css';
// import './Project.css'; 
// const Projects = ({ projectId }) => {
//   const [projectData, setProjectData] = useState(null);
//   const [error, setError] = useState(null);
//   const [description, setDescription] = useState('');
//   const token=localStorage.getItem("token")
//   useEffect(() => {
//     const fetchProjectData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/projects`);
//         setProjectData(response.data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     const token=localStorage.getItem("token")

//     fetchProjectData();
//   }, [projectId]);

//   const handleDelete = async (id) => {
//       try {
//         const response = await axios.delete(`http://localhost:3001/projects/${id}`,{
//           headers:{
//             Authorization: `Bearer ${localStorage.getItem("token")}`
//           }
//         });
//         console.log(response)
//         if(response.status=='200'){
//           alert("deleted")
//           window.location.reload()
//         }else{
//           alert("error")
//         }
//       } catch (error) {
//         setError(error.message);
//       }
//   }

//   const handleUpdate = async (id) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:3001/projects/${id}`,
//         { description: description },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );
  
//       if (response.status === 200) {
//         alert("updated");
//         window.location.reload();
//       } else {
//         alert("error");
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };
  
  
//   return (
//    <div className="projects-container">
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}
//       {projectData && (
//         <div>
//          {
//           projectData?.map((project) => (
//             // <div key={project.id}>
//             <div key={project.id} className="project-item">
//               <h2>{project.name}</h2>
//               <p>{project.description}</p>
//               <input type="text" defaultValue={project.description} onChange={(e)=>{
//                 console.log(e.target.value)
//                 setDescription(e.target.value)
//               }}/>
//               <img src={project.image_url} alt="fff"/>
//               { token && (
//                 <div>
//               <button onClick={()=>handleDelete(project._id)}>delete</button>
//               <button onClick={()=>handleUpdate(project._id)}>update</button>
              
//               </div>
//               )
// }
//             </div>

//           ))
// }
//     </div>
//   )}
//   </div>
//   )
// }


// export default Projects;


// src/components/ProjectDetails.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../../utils/baseUrl';
import '../projects/Project.css';
import './Project.css'; 
const Projects = ({ projectId }) => {
  const [projectData, setProjectData] = useState(null);
  const [error, setError] = useState(null);
  const [description, setDescription] = useState('');
  const token=localStorage.getItem("token")
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/projects`);
        setProjectData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    const token=localStorage.getItem("token")

    fetchProjectData();
  }, [projectId]);

  const handleDelete = async (id) => {
      try {
        const response = await axios.delete(`${baseUrl}/projects/${id}`,{
          headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        console.log(response)
        if(response.status=='200'){
          alert("deleted")
          window.location.reload()
        }else{
          alert("error")
        }
      } catch (error) {
        setError(error.message);
      }
  }

  const handleUpdate = async (id) => {
    try {
      const response = await axios.put(
        `${baseUrl}/projects/${id}`,
        { description: description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (response.status === 200) {
        alert("updated");
        window.location.reload();
      } else {
        alert("error");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  
  const handleAddProject = () => {
    // Implement the logic for adding a new project
    // This could involve navigating to a different page or showing a modal, for example
    navigate('/createproject');
  };
  

  return (
    <div className="projects-container">
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {projectData && (
        <div className="card-container">
          {token && (
            <div className="card project-card add-project-card" onClick={handleAddProject}>
              <div className="card-body">
                <h5 className="card-title">+</h5>
                {/* <p className="card-text">Add Project</p> */}
              </div>
               </div>
          )}
          {projectData?.map((project) => (
            <div key={project.id} className="card project-card">
              <img src={project.image_url} className="card-img-top" alt="Project" />
              <div className="card-body">
                
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <input type="text" defaultValue={project.description} onChange={(e) => setDescription(e.target.value)} />
                {token && (
                  <div>
                    <button onClick={() => handleUpdate(project._id)} className="btn btn-primary">Update</button>
                    <br></br>
                    <button onClick={() => handleDelete(project._id)} className="btn btn-danger">Delete</button>
                    
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Projects;
