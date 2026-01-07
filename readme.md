## ⚪ Marshmello – Full Stack Project

**Marshmello** is a lightweight, intuitive, and "soft" project management tool designed for teams who want to keep their workflow organized and stress-free.  
It consists of a **React frontend** and a **Node.js/Express backend** with real-time collaboration and authentication.

---

## ✨ Key Features

- **Dynamic Kanban Boards**: Drag and drop tasks between columns (Resources, Icebox, To Do, In Progress, Blocked, QA, Done).
- **RTL Support**: Full Right-to-Left layout compatibility, optimized for Hebrew and Arabic.
- **Task Checklists**: Sub-tasks inside each card so no detail is missed.
- **Smart Columns**: Pre-configured workflow columns like **Icebox**, **Blocked**, and **QA**.
- **Real-time Sync**: Live board updates using Socket.io.
- **Soft UI Design**: Clean, minimal, and easy on the eyes.
- **Auth & Boards API**: Secure user authentication and board management on the backend.
- **File Uploads & AI Integration**: Cloudinary for files, plus AI-assisted features (when enabled).

---

## 🛠 Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Real-time**: Socket.io
- **Auth**: Cookies + Google OAuth (ID token verified on backend)
- **Other**: Cloudinary, bcrypt

---

## 📁 Project Structure

```text
.
├─ frontend/   # React app (UI, Kanban board, drag & drop, RTL layout)
├─ backend/    # Express API (auth, boards, uploads, realtime)
└─ README.md   # This file
```

Each folder (`frontend`, `backend`) includes its own README with more specific details.

---

## 🚀 Getting Started (Development)

### 1. Prerequisites

- **Node.js** v18+
- **npm** (or yarn)
- A **MongoDB** instance (local or MongoDB Atlas)
- A **Google OAuth Client ID**
- A **Cloudinary** account (if you use file upload features)

---

### 2. Backend Setup (`backend/`)

1. **Install dependencies**:

   ```bash
   cd backend
   npm install
   ```

2. **Create a `.env` file** in `backend`:

   ```bash
   PORT=3030
   MONGODB_URI=your_mongodb_connection_string
   CLOUDINARY_URL=your_cloudinary_url
   GOOGLE_CLIENT_ID=your_google_oauth_client_id
   ```

3. **(Optional) Seed the database**:

   ```bash
   npm run seed
   ```

4. **Run the backend**:

   ```bash
   # Development
   npm run dev

   # Production
   npm start
   ```

   Backend will usually run on `http://localhost:3030`.

---

### 3. Frontend Setup (`frontend/`)

1. **Install dependencies**:

   ```bash
   cd frontend
   npm install
   ```

2. **Environment variables** (if needed), for example:

   ```bash
   VITE_API_URL=http://localhost:3030
   VITE_GOOGLE_CLIENT_ID=your_google_oauth_client_id
   ```

3. **Run the frontend**:

   ```bash
   npm run dev
   ```

4. Open the app at `http://localhost:5173` (or whatever URL the dev server prints).

---

## 🔑 Google OAuth Flow (High Level)

1. User logs in with Google on the frontend using the **Client ID**.
2. Frontend gets a **Google ID token** and sends it to the backend: `POST /api/auth/google`.
3. Backend **verifies** the ID token with Google and creates/updates the user.
4. Backend sets an **auth cookie** (or returns a token) for the session.

**Security Notes:**

- ✅ `GOOGLE_CLIENT_ID` is safe to be public in the frontend.
- ✅ ID tokens are always verified on the backend.
- ❌ Never expose your Google **Client Secret**.
- ❌ Never trust user data without verifying the ID token server-side.

---

## 🔌 Main Backend API Endpoints

- `POST /api/auth/google` – Google OAuth login
- `/api/auth` – Other authentication routes
- `/api/user` – User management
- `/api/board` – Board CRUD operations
- `/api/upload` – File uploads (Cloudinary)

---

## 🧩 Frontend Highlights

- **Kanban Board** with drag & drop using `@hello-pangea/dnd`.
- **RTL layout** support for Hebrew/Arabic.
- **Checklists** and task details inside each card.
- **Real-time updates** via WebSocket connection.
- **Soft UI** styling using Tailwind and custom components.

---

## 🧪 Useful Scripts

From inside each folder:

- **Frontend**
  - `npm run dev` – Start dev server
  - `npm run build` – Production build
  - `npm run preview` – Preview production build (Vite)
- **Backend**
  - `npm run dev` – Dev server (e.g. with nodemon)
  - `npm start` – Production server
  - `npm run seed` – Seed database (optional)

---

## 📦 Deployment (Overview)

- **Backend**: Deploy to services like Render, Railway, or Heroku.
- **Frontend**: Deploy to services like Netlify, Vercel, or any static host.
- **Configuration**:
  - Ensure the frontend `API_URL` / `VITE_API_URL` points to the deployed backend.
  - Configure all env vars (MongoDB URI, Cloudinary URL, Google Client ID, etc.) in your hosting providers.

---

## 🤝 Contributing

1. Fork the repo.
2. Create a branch: `git checkout -b feature/your-feature`.
3. Commit: `git commit -m "Add feature"`.
4. Push: `git push origin feature/your-feature`.
5. Open a PR.

---

## 📄 License

This project is private/personal.


