# 🚀 GenWeb.ai – AI-Powered Website Builder

> Generate, edit, and deploy complete websites instantly using AI.

---

## 🌐 Live Demo  
👉 https://genweb-ai-88nz.onrender.com/

---

## 📌 Overview  
GenWeb.ai is a full-stack AI-powered web application that allows users to generate complete websites from simple text prompts. It automates website creation and enables users to build, edit, and preview websites without writing code.

---

## ✨ Features  
- 🤖 AI-powered website generation (HTML, CSS, JavaScript)  
- 🛠️ Real-time website editor  
- 🔐 Secure authentication using Firebase  
- 💳 Stripe-based subscription system  
- 📊 User dashboard for managing websites  
- 🌐 Live preview of generated websites  

---

## 🧱 Tech Stack  

**Frontend:** React.js (Vite), Redux Toolkit, React Router, Axios  
**Backend:** Node.js, Express.js  
**Database:** MongoDB (Mongoose)  
**Authentication:** Firebase Authentication  
**Payments:** Stripe API  
**AI Integration:** OpenRouter API  

---

## 🏗️ Architecture  

Client (React)  
↓  
Backend (Node.js / Express)  
↓  
Database (MongoDB)  
↓  
External Services (OpenRouter, Stripe, Firebase)  

---

## 🔄 How It Works  

1. User logs in via Firebase Authentication  
2. User enters a prompt (e.g., “Portfolio Website”)  
3. Backend sends request to OpenRouter API  
4. AI generates website code (HTML, CSS, JS)  
5. Generated code is stored in MongoDB  
6. User edits the website using the editor  
7. Website is previewed and managed via dashboard  

---

## 📂 Project Structure  

frontend/  
backend/  

---

## ⚙️ Installation & Setup  

Clone the repository:
git clone https://github.com/vaibhavtripathi24/GenWeb.ai.git  
cd GenWeb.ai  

Backend:
cd backend  
npm install  
npm start  

Frontend:
cd frontend  
npm install  
npm run dev  

---

## 🔐 Environment Variables  

MONGO_URI=your_mongodb_uri  
STRIPE_SECRET=your_stripe_key  
OPENROUTER_API_KEY=your_api_key  

---

## 🚀 Future Improvements  

- Drag-and-drop website builder  
- Custom domain support  
- Version control for websites  
- Performance optimization  

---

## ⚠️ Known Limitations  

- AI-generated code may require refinement  
- Basic editor functionality  
- No rate limiting implemented  

---

## 👨‍💻 Author  

Vaibhav Tripathi  

---

## ⭐ Support  

If you like this project, give it a ⭐ on GitHub!
