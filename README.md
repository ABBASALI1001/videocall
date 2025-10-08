# 📹 VideoCall Project (MERN + WebRTC + Socket.IO)

A **real-world video calling application** built with the **MERN stack** (React + Vite, Node.js, Express, MongoDB).  
This app demonstrates **real-time video calling** functionality with **authentication using JWT**, powered by **Socket.IO** and **WebRTC (Simple-Peer)**.  
The UI is **modern and responsive**, serving as a mini-clone of Zoom.

---

## 🚀 Features

- Real-time **video and audio calling**
- **User authentication** with JWT
- Modern and responsive UI
- Built with **React + Vite**, **Node.js + Express**, **MongoDB**
- Real-time communication powered by **Socket.IO** and **WebRTC (Simple-Peer)**

---

## 🛠️ Tech Stack & Libraries

### Frontend

- React (with Vite)
- TailwindCSS
- Axios
- React Router DOM
- React Icons
- React Hot Toast
- Lottie React
- Howler (for sounds)
- Simple-Peer
- Socket.IO Client
- Node / Buffer / Crypto polyfills for browser

### Backend

- Node.js + Express
- MongoDB + Mongoose
- Socket.IO
- JWT + bcrypt
- WebRTC signaling

---

## 📂 Project Structure

videocall-project/
├── client/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ │ ├── common/ # Common UI components (Button, Input, Modal)
│ │ │ ├── video/ # Video call components (VideoPlayer, Controls, Participants)
│ │ │ └── ui/ # Other UI components
│ │ ├── hooks/ # Custom React hooks (useAuth, useVideoCall, useWebRTC)
│ │ ├── services/ # API services (authService, videoService)
│ │ └── constants/ # App constants
│ └── package.json
├── server/ # Node.js backend
│ ├── routes/
│ ├── schema/
│ ├── utils/
│ └── package.json
└── README.md # Root README (this file)

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/videocall-project.git
cd videocall-project

2. Setup Backend
cd server
npm install
cp .env.example .env      # Add your environment variables
npm run dev

3. Setup Frontend
cd ../client
npm install
cp .env.example .env      # Add your environment variables
npm run dev               # Start frontend dev server


Frontend will run at: http://localhost:5173 (Vite default)
Backend will run at: http://localhost:5000 (or your PORT in .env)


🔧 Environment Variables

Add a .env file in your cloned project with the following variables:
VITE_API_BASE_URL=
VITE_API_SOCKET_URL=

# Server port
PORT=

# MongoDB Atlas connection
MONGOOSE_CONNECTION=

# JWT secret
JWT_SECRET=

# Frontend URL for CORS
FRONTEND_URL=

 Replace the values with your own configuration.


⚡ Deployment
Frontend (Netlify / Vercel)

Build command: npm run build

Publish directory: client/dist

Add environment variables (VITE_API_BASE_URL, VITE_API_SOCKET_URL, etc.)

Backend (Render / Heroku / Vercel)

Start command: npm start

Add environment variables from .env

You can replace these with your actual deployed URLs once live.

🤝 Contributing

This is a personal learning project, but pull requests are welcome if you want to improve it.

📜 License

This project is for learning purposes. No license required for personal use.

---


```
