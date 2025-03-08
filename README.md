# CampGrounds 🌲🏕️  

CampGrounds is a full-stack web application that allows users to create, review, and manage campgrounds. Built with **Node.js, Express.js, MongoDB**, and **Passport.js**, it features authentication, dynamic location mapping with **Mapbox**, and image uploads via **Cloudinary**.  

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
![YelpCamp Screenshot](https://your-image-link.com)  

## 🚀 Installation  
1. Clone the repository:  
   ```sh
   git clone https://github.com/yourusername/yelpcamp.git
   cd yelpcamp
2.Install dependencies
```sh
npm install
3.Set up .env file with:
```sh
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
MAPBOX_TOKEN=your_mapbox_token
DATABASE_URL=your_mongo_db_url
4.Run
```sh
node app.js

