# 📘 Personal Knowledge Base System

## 📌 Project Overview

The **Personal Knowledge Base System** is a web-based application that allows users to securely store, manage, and retrieve their personal notes.
Each user has a **private workspace**, ensuring that notes are accessible only to their owner.

This project demonstrates **authentication, authorization, CRUD operations, search, and tagging** using modern web technologies.

---

## 🎯 Objectives

- Provide a secure system for storing personal notes
- Implement user authentication using JWT
- Allow users to organize notes using tags
- Enable search functionality for quick access
- Demonstrate full-stack development (Backend + Frontend)

---

## 🛠️ Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcryptjs

### Frontend

- HTML
- CSS
- JavaScript
- Live Server (for testing)

### Tools

- Postman (API testing)
- MongoDB Compass
- Git & GitHub

---

## 📂 Project Structure

```
personal-knowledge-base/
│
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── noteController.js
│   │
│   ├── models/
│   │   ├── userModel.js
│   │   └── noteModel.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── noteRoutes.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── app.js
│   └── server.js
│
├── frontend/
│   ├── css/
│   │   └── style.css
│   ├── login.html
│   ├── add-note.html
│   └── notes.html
│
├── .env
├── package.json
└── README.md
```

---

## 🔐 Features

### Authentication

- User Registration
- User Login with JWT
- Password encryption using bcrypt

### Notes Management

- Create personal notes
- View all own notes
- Search notes by keyword
- Filter notes by tags

### Security

- JWT-based authentication
- Ownership-based access control
- Protected routes using middleware

---

## 🔗 API Endpoints

### Auth Routes

| Method | Endpoint             | Description   |
| ------ | -------------------- | ------------- |
| POST   | `/api/auth/register` | Register user |
| POST   | `/api/auth/login`    | Login user    |

### Notes Routes (Protected)

| Method | Endpoint                      | Description   |
| ------ | ----------------------------- | ------------- |
| POST   | `/api/notes`                  | Create note   |
| GET    | `/api/notes`                  | Get all notes |
| GET    | `/api/notes/tag/:tag`         | Filter by tag |
| GET    | `/api/notes/search?q=keyword` | Search notes  |

---

## ▶️ How to Run the Project

### 1️⃣ Clone Repository

```bash
git clone <repository-url>
cd personal-knowledge-base
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/knowledgebase
JWT_SECRET=mysecretkey
```

### 4️⃣ Start Backend Server

```bash
npm run dev
```

### 5️⃣ Run Frontend

- Open `frontend/login.html` using **Live Server**

---

## 🧪 Testing

- Backend APIs tested using **Postman**
- Frontend tested using **Live Server**
- JWT token passed via `Authorization` header

---

## 🎓 Demo Highlights

- Secure login with JWT
- Private notes per user
- Tag-based filtering
- Keyword search
- Clean and simple UI

---

## 🚀 Future Enhancements

- Note editing & deletion
- Folder-based organization
- Export notes feature
- Deployment on cloud

---

## 👨‍💻 Author

**Priya Dubey**

---

## 🏁 Conclusion

This project successfully demonstrates a **secure, user-centric Personal Knowledge Base System** with modern backend practices and a clean frontend interface.
