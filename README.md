# LatSpace Plant Onboarding Wizard — Track B

## Project Overview
A web-based, interactive multi-step wizard for onboarding plants into LatSpace.  
Admins can enter plant details, add assets, enable parameters, define formulas with real-time validation, and generate a structured JSON configuration.  
This replaces the old brittle Excel-based workflow with an intuitive UI.

---

## Features
- Multi-step wizard: Plant → Assets → Parameters → Formulas → Review
- Real-time field validation for inputs
- Formula syntax validation via backend
- Modern responsive UI
- Enhanced visual styling (background, floating labels, progress indicators)
- Backend API using FastAPI
- Frontend UI using React

---

## Architecture
backend/ --> FastAPI backend
├ main.py --> API routes
├ models.py --> Pydantic models
├ formula_validator.py --> Formula validation
└ parameters.json --> Parameter registry

frontend/ --> React frontend
├ src/
├ App.js
├ api.js
├ steps/ --> Step1Plant.js, Step2Assets.js, Step3Parameters.js, Step4Formulas.js, Step5Review.js
└ styles.css
 
 
---

## Setup Instructions
```bash
backend/
├ main.py # API routes
├ models.py # Pydantic models
├ formula_validator.py # Formula validation
└ parameters.json # Parameter registry


**Frontend** → React frontend  

frontend/
├ src/
│ ├ App.js
│ ├ api.js
│ └ steps/ # Step1Plant.js, Step2Assets.js, Step3Parameters.js, Step4Formulas.js, Step5Review.js
└ styles.css


---

## Setup Instructions

### Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install fastapi uvicorn pydantic
uvicorn main:app --reload

Backend runs at http://localhost:8000

Frontend
cd frontend
npm install
npm start

Frontend runs at http://localhost:3000

How to Use

Step 1: Fill in plant info (name, address, manager email, location)

Step 2: Add assets (name, display name, type)

Step 3: Enable parameters (select from parameter registry)

Step 4: Add formulas (e.g., steam_generation / coal_consumption * 100)

Step 5: Review and submit

Final output is a structured JSON with all plant info, assets, parameters, and formulas.
