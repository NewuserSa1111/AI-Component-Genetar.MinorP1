# ⚡ AI Component Generator

Developed an AI-powered UI component generation system that converts natural language prompts into reusable frontend components, 
improving development speed and reducing manual UI coding effort through structured AI-driven automation.

---

## 📌 Problem Statement

Frontend development typically requires repetitive UI component creation, boilerplate code writing, 
and consistent styling setup across multiple projects, leading to increased development time and redundancy.

This project solves these inefficiencies by introducing an AI-powered system that transforms natural language prompts 
into structured, reusable UI components, enabling faster development workflows and reducing manual coding overhead.

---

## 🚀 Features

- 🤖 AI-powered UI component generation
- 🎨 Modern and responsive designs
- ⚡ Live code editor (Monaco Editor)
- 👀 Live Preview
- 📋 Copy generated code
- 📥 Export generated code as HTML
- 🌙 Dark-themed interface
- 📱 Responsive layout
- 🔄 Real-time API integration
- 🛡️ Input validation and error handling

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Vite
- Bootstrap
- React Router DOM
- Monaco Editor
- React Select
- React Toastify
- React Icons
- Axios

## Backend

- Node.js
- Express.js
- Gemini API
- dotenv
- CORS

---

# 📂 Project Structure

```text
GenUI/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone the repository

```bash
git clone https://github.com/yourusername/genui.git
```

```bash
cd genui
```

---

## Install Frontend Dependencies

```bash
cd client
npm install
```

---

## Install Backend Dependencies

```bash
cd ../server
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
GEMINI_API_KEY=YOUR_API_KEY
PORT=5000
```

---

# ▶️ Running the Project

## Start Backend

```bash
cd server
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

## Start Frontend

```bash
cd client
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 🔄 Workflow

1. Enter a component description.
2. Select a framework.
3. Click **Generate**.
4. The request is sent to the Express backend.
5. Backend calls the Gemini API.
6. AI-generated HTML code is returned.
7. Code is displayed inside Monaco Editor.
8. Preview the component or export the HTML file.

---

# 🌱 Future Improvements

- User Authentication
- Prompt History
- Saved Components
- More Framework Support
- Multiple AI Model Support
- Deployment
- Component Library
- Code Optimization Suggestions

---

# ⚠️ Note

This project integrates the **Google Gemini API** for AI code generation.

During development, the application experienced **Gemini API quota restrictions** on the free tier, preventing live AI generation in some environments. The frontend, backend architecture, API integration, and error handling are fully implemented. Providing an API key with available quota enables the generation feature.

---

# 👩‍💻 Author

**Muskan Donwar**

B.Tech Computer Science Student

- GitHub: https://github.com/NewuserSa1111
- LinkedIn: www.linkedin.com/in/muskan-72656828a

---

## ⭐ If you like this project

Give this repository a ⭐ on GitHub!


🚀 This project showcases how AI can bridge the gap between natural language and frontend development 
    by generating production-ready UI components, significantly improving developer productivity.
