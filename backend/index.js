require('dotenv').config();

const dbUrl = process.env.DB_URL;
const apiKey = process.env.API_KEY;
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const s3Routes = require('./routes/awsroutes');

//const s3Routes = require('./routes/s3Routes');




const mongoose = require("mongoose");
 //const awsController = require('./controller/awsController');
const app = express();
// app.use(cors(
//  // {
//  //  // origin:["https://internship-voltix-frontend.vercel.app"],
//  //  // methods:["POST","GET"],
//  //  // credentials:true
//  // }
//  ));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://internship-voltix-frontend.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
  

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Use S3 routes
app.use('/', s3Routes);
// app.use('/s3', s3Routes)
app.get("/",(req,res)=>{
 res.json("hello");
})
const testimonialController = require('./controller/testimonialController');
const serviceController=require("./controller/serviceController")





// app.listen(3001);




// Routers




const router=require("./routes/userRouter")
//app.use('/s3', s3Routes)

 app.use("/",router)
//  app.use('/', awsController);



//Use the projectRouter for all project-related routes



const { authenticateToken } = require('./middleware/auth');



app.delete('/api/projects/:projectId', authenticateToken, (req, res) => {
  const { projectId } = req.params;

  // Implement your logic to delete the project from the server data
  const deletedProjectIndex = projects.findIndex((project) => project.id === parseInt(projectId));

  if (deletedProjectIndex !== -1) {
    projects.splice(deletedProjectIndex, 1);
    res.status(200).json({ message: 'Project deleted successfully' });
  } else {
    res.status(404).json({ message: 'Project not found' });
  }
});


mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

  const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

