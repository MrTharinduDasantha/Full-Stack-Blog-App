# Full Stack Blog Website

In this project, I will make a Full-stack Blog app using Next JS, Tailwind CSS, and MongoDB. In this, full-stack website project I will create a forntend, Backend, and admin panel. 

On this website, I will display the blog post. I will create an admin panel dashboard using Next js to upload and manage our blog post. I will also create the backend for our APIs. Using these backend API I can save the blog post on our mongodb database and we can also fetch the data from mongodb database and display the blog post on your website.

To design this blog website I will use tailwind css so that I can easily design our components layout in next js project.
## Demo

By clicking this link you can see the demonstration of the full stack food ordering website.

Link 👉 https://drive.google.com/file/d/1WcT88pT0FYGc2DGthRbYbidpuSMWk9jk/view?usp=sharing 👈


## Installation

#### Clone the repository and install project dependencies.
```bash
  git clone https://github.com/MrTharinduDasantha/Full-Stack-Blog-App.git
  cd Full-Stack-Blog-App
  npm install
```
#### Database Configuration
To connect to MongoDB, configure the db.js file.
- In the config folder located inside the lib directory, open db.js.
- Replace <Enter your mongodb uri here> with your MongoDB URI.
```bash
import mongoose from'mongoose'

// Connect to the database
export const connectDB = async () => {
    await mongoose.connect('<Enter your mongodb uri here>/full_stack_blog_website_db')
    console.log('DB connected successfully')
}
```
#### Run the Project
Start the development server.
```bash
npm run dev
```
#### Important Notes
- The blog website will be available at http://localhost:3000, and the admin panel at http://localhost:3000/admin.
- Make sure your MongoDB URI and database permissions are properly configured for connection.


## Screenshots

![image alt](https://github.com/MrTharinduDasantha/Full-Stack-Real-Time-Chat-App/blob/dfb60fd417d424326a8e23f22569556cc62b551c/Img%20-%201.png)
