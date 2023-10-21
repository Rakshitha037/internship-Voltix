require('dotenv').config();

const dbUrl = process.env.DB_URL;
const apiKey = process.env.API_KEY;

const express = require('express');
//const s3Routes = require('./routes/s3Routes');




const mongoose = require("mongoose");
 //const awsController = require('./controller/awsController');
const app = express();

app.use(express.json());
// app.use('/s3', s3Routes)

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

