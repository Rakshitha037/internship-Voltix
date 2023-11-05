// const baseUrl = "http://localhost:3000"
const baseURL = 'https://internship-voltix-backend.vercel.app';

fetch(`${baseURL}/data`)
    .then(response => response.json())
    .then(data => {
        // Handle the data from the backend
    })
    .catch(error => console.error('Error:', error));


export default baseUrl
