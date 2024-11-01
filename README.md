# Video Streaming Platform

A full-stack video streaming platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js), similar to YouTube. Users can upload, watch, like, and comment on videos.

## 🚀 Features

### User Features
- User authentication (Sign up, Sign in)
- Upload videos with thumbnails
- Like/Dislike videos
- Comment on videos
- Subscribe to channels
- Video search functionality (Future Plan)
- Categorized video browsing (Future Plan)

### Technical Features
- JWT based authentication
- Cloudinary integration for video and image storage
- Real-time updates
- Secure API endpoints

## 🛠️ Tech Stack

### Frontend
- React.js
- TailwindCSS
- DaisyUI
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- Bcrypt
- Cloudinary

### 📝 API Endpoints
- Auth Routes

    POST /user/signin - Register new user
    POST /user/login - Login user

- Video Routes

    POST /video/upload - Upload new video
    GET /video/:videoId - Get video details
    PUT /video/:videoId - Update video details
    DELETE /video/:videoId - Delete video
    PUT /video/like/:videoId - Like video
    PUT /video/dislike/:videoId - Dislike video
    PUT /video/view/:videoId - Add view to video

- Comment Routes

    POST /comment/new/:videoId - Add new comment
    GET /comment/:videoId - Get all comments
    PUT /comment/:commentId - Update comment
    DELETE /comment/:commentId - Delete comment

- User Routes

    PUT /user/subscribe/:channelId - Subscribe to channel
    PUT /user/unsubscribe/:channelId - Unsubscribe from channel
