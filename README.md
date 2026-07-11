# 💰 Smart Budget Tracker

A full-stack expense tracking web application built with Node.js and Express.js.

## 🌐 Live Demo
https://smart-budget-trackerr.onrender.com

## 🛠️ Tech Stack
- **Frontend:** React.js, Tailwind CSS, Vite, Chart.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas)
- **Deployment:** Render

## ✨ Features
- Add expenses with title, amount, and category
- Delete expenses
- Real-time total calculation
- Category-wise tracking (Food, Travel, Shopping, Bills, etc.)
- Interactive pie chart for category-wise spending visualization
- Responsive, component-based UI

## 📁 Project Structure
smart-budget-tracker/

├── server.js
├── package.json
├── .env
└── client/
├── src/
│   ├── components/
│   │   ├── ExpenseForm.jsx
│   │   ├── ExpenseList.jsx
│   │   ├── ExpenseChart.jsx
│   │   ├── StatsCard.jsx
│   │   └── Modals.jsx
│   ├── App.jsx
│   ├── constants.js
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json

## 🚀 Run Locally
npm install
npm start
Open http://localhost:3000
