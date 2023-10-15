const express = require("express");
const mongoose = require("mongoose");
const routes=require("./routes/route")

const app = express();

app.use(express.json());
app.use("/",routes)
// const projects = [
//   {
//     id: 1,
//     name: 'Project A',
//     description: 'This is Project A',
//     start_date: '2023-01-01',
//     end_date: '2023-12-31',
//     status: 'In Progress',
//     team: ['John Doe', 'Jane Doe'],
//     image_url: 'https://example.com/project-a',
//   },
// ]
// app.get('/projects', (req, res) => {
//   res.json(projects);
// });

// mongoose
//   .connect("mongodb+srv://rakshitharakshitha6242:raksh@cluster0.rdl2otz.mongodb.net/test")
//   .then(() => {
//     console.log("DB connected successfully");
//   })

//   .catch((err) => {
//     console.log(err);
//   });

// app.listen(3000, () => {
//   console.log("Server Running At 3000");
// });
mongoose
  .connect("mongodb+srv://rakshitharakshitha6242:raksh@cluster0.rdl2otz.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server Running At 3000");
});
