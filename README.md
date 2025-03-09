# YelpCamp 🌲🏕️  

YelpCamp is a full-stack web application that allows users to create, review, and manage campgrounds. Built with **Node.js, Express.js, MongoDB**, and **Passport.js**, it features authentication, dynamic location mapping with **MapTiler**, and image uploads via **Cloudinary**.  

## 🚀 Features  
- **User Authentication & Authorization** (Signup/Login via Passport.js)  
- **CRUD Operations** (Create, Read, Update, Delete Campgrounds & Reviews)  
- **Mapbox API Integration** for interactive campground locations  
- **Cloudinary Image Uploads** for storing campground photos  
- **Secure Routes & Middleware Validation** for data integrity  

## 🛠️ Tech Stack  
- **Frontend**: HTML, CSS, Bootstrap  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (Mongoose ODM)  
- **Authentication**: Passport.js  

## 📷 See for yourself
![image](https://github.com/user-attachments/assets/7afd7cb8-d793-41b1-9ea7-229536b30270)
![image](https://github.com/user-attachments/assets/c72fc73d-db17-43be-acf1-7aa213364c35)
![image](https://github.com/user-attachments/assets/6445838a-9da9-40e6-9e5f-40c80a1054e6)
![image](https://github.com/user-attachments/assets/2d7b7226-3882-47d3-9944-ef0920fe5c93)
![image](https://github.com/user-attachments/assets/ce2b0b53-474f-4f84-b961-9bfc0323a2fc)
![image](https://github.com/user-attachments/assets/be672a65-96c5-4c68-8fad-175dc95e0c5b)






## 🚀 Installation  
1. Clone the repository
git clone https://github.com/Ashu09032005/CampGrounds
cd CampGrounds

2. Install dependencies
npm install 

3. Set up .env file with:
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
MAPBOX_TOKEN=your_mapbox_token
DATABASE_URL=your_mongo_db_url

4. Run the application
node app.js

