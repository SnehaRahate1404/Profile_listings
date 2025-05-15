📘 Project: Developer Profile Directory
This full-stack web application allows users to view developer profiles with detailed information including skills, address, and an interactive map showing their location. Built using:

React (frontend)
Node.js + Express (backend)
MongoDB (database)
Leaflet (for maps)

🚀 Features

View a list of developer profiles
Click on a profile to view detailed info
View user location on an interactive map using Leaflet & OpenStreetMap
Modular component structure with routing

🧰 Technologies Used

Frontend: React, Axios, React Router, Leaflet
Backend: Node.js, Express.js, Mongoose (MongoDB)
Map API: Leaflet with Nominatim Geocoding
Styling: Bootstrap, custom CSS

🛠️ Installation & Setup Instructions
git clone  :  git clone https://github.com/SnehaRahate1404/Profile_listings.git
              cd Profile_listings

# Setup Backend (Express + MongoDB)
cd Backend
npm install
Create .env file
add the following in the .env file : 
PORT=8080
MONGO_URL=mongodb://localhost:27017/dev-directory   #change with your mongodb cluster connection string

# setup the the database by initializing it
cd Backend
node data.js #initialize the database

Start Backend Server
npm start

# Setup Frontend (React)
cd Frontend
npm install

📦 Required Frontend Packages
axios
react-router-dom
leaflet
react-leaflet

Also install Leaflet CSS for proper rendering:
npm install leaflet

# Author 
Sneha Manoj Rahate





