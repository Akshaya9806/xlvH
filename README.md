# 🚀 XLVentures AI Agent Platform

An AI-powered **Multi-Agent Lead Discovery Platform** built using **FastAPI**, **LangGraph**, **Google Gemini**, and **React**.

The platform understands a user's business query, intelligently plans a workflow using AI, discovers relevant companies, researches them, qualifies the best prospects, generates recommendations, and produces a structured lead discovery report.

---

# ✨ Features

- 🤖 AI Planner Agent using Google Gemini
- 🧠 LangGraph Multi-Agent Workflow
- 🔍 Company Discovery
- 📊 Company Research & Enrichment
- ✅ Lead Qualification
- 🎯 Smart Recommendations
- 📄 Automated Report Generation
- ⚡ FastAPI REST API
- 💻 React Dashboard (Under Development)

---

# 🏗 Architecture

```
                     User
                       │
                       ▼
               React Frontend
                       │
                   Axios API
                       │
                       ▼
                FastAPI Backend
                       │
                       ▼
               LangGraph Workflow
                       │
                       ▼
              ┌─────────────────┐
              │ Planner Agent   │
              └─────────────────┘
                       │
                       ▼
              ┌─────────────────┐
              │ Trigger Agent   │
              └─────────────────┘
                       │
                       ▼
              ┌─────────────────┐
              │ Search Agent    │
              └─────────────────┘
                       │
                       ▼
              ┌─────────────────┐
              │ Research Agent  │
              └─────────────────┘
                       │
                       ▼
              ┌────────────────────────┐
              │ Qualification Agent    │
              └────────────────────────┘
                       │
                       ▼
              ┌────────────────────────┐
              │ Recommendation Agent   │
              └────────────────────────┘
                       │
                       ▼
              ┌─────────────────┐
              │ Report Agent    │
              └─────────────────┘
                       │
                       ▼
              Final JSON Report
```

---

# 📂 Project Structure

```
xlventures-ai-agent/

│
├── backend/
│   │
│   ├── agents/
│   │   ├── planner_agent.py
│   │   ├── trigger_agent.py
│   │   ├── search_agent.py
│   │   ├── research_agent.py
│   │   ├── qualification_agent.py
│   │   ├── recommendation_agent.py
│   │   └── report_agent.py
│   │
│   ├── api/
│   ├── prompts/
│   ├── services/
│   ├── database/
│   │
│   ├── config.py
│   ├── graph.py
│   ├── planner.py
│   ├── state.py
│   ├── main.py
│   │
│   ├── requirements.txt
│   ├── .env.example
│   └── README.md
│
├── frontend/
│   │
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

# 🛠 Tech Stack

## Backend

- Python
- FastAPI
- LangGraph
- Google Gemini API
- Pydantic
- SQLAlchemy (Upcoming)
- SQLite (Upcoming)

## Frontend

- React
- Vite
- Axios
- Framer Motion
- React Icons
- Tailwind CSS

---

# ⚙️ Backend Setup

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/xlventures-ai-agent.git
```

Navigate to backend

```bash
cd xlventures-ai-agent/backend
```

Create Virtual Environment

### Windows

```bash
python -m venv venv
```

Activate

```bash
venv\Scripts\activate
```

### Linux / macOS

```bash
python3 -m venv venv
source venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Create environment file

```bash
copy .env.example .env
```

Update your `.env`

```env
APP_NAME=XLVentures AI Agent
APP_ENV=development

GEMINI_API_KEY=YOUR_GEMINI_API_KEY

MODEL_NAME=gemini-2.5-flash

DATABASE_URL=sqlite:///database/xlventures.db
```

Run backend

```bash
uvicorn main:app --reload
```

Open

```
http://127.0.0.1:8000/docs
```

---

# 💻 Frontend Setup

Navigate to frontend

```bash
cd ../frontend
```

Install dependencies

```bash
npm install
```

Run

```bash
npm run dev
```

Open

```
http://localhost:5173
```

---

# 🔄 Workflow

```
User Query
      │
      ▼
Planner Agent
      │
      ▼
Trigger Agent
      │
      ▼
Company Discovery
      │
      ▼
Research Agent
      │
      ▼
Qualification Agent
      │
      ▼
Recommendation Agent
      │
      ▼
Report Agent
      │
      ▼
Final JSON Report
```

---

# 📌 Example Query

```
Find healthcare startups in India that recently raised funding.
```

---

# 📊 Sample Output

- Planner identifies business domain
- Trigger detects funding event
- Company discovery identifies matching startups
- Research enriches company information
- Qualification scores each company
- Recommendation Agent prioritizes prospects
- Report Agent generates the final report

---

# 🚀 Current Progress

### ✅ Completed

- FastAPI Backend
- Gemini Integration
- LangGraph Workflow
- Planner Agent
- Trigger Agent
- Company Discovery Agent
- Research Agent
- Qualification Agent
- Recommendation Agent
- Report Agent
- REST API
- React + Vite Project Setup

### 🚧 In Progress

- Modern React Dashboard
- Real Company Search APIs
- Database Integration
- Authentication
- PDF Report Export
- Deployment

---

# 👨‍💻 Developed For

**XLVentures AI Hackathon**

This project demonstrates how AI agents can automate B2B lead discovery by combining planning, research, qualification, recommendation, and reporting into a single intelligent workflow.

---

# 📄 License

This project is developed for educational and hackathon purposes.
