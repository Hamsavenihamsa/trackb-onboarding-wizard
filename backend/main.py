from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json

from models import OnboardingConfig
from formula_validator import validate_formula

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

with open("parameters.json") as f:
    PARAMS = json.load(f)

@app.get("/api/parameters")
def get_parameters():
    return PARAMS

@app.post("/api/validate-formula")
def validate_formula_api(data: dict):
    return validate_formula(
        data.get("expression"),
        data.get("enabled_params", [])
    )

@app.post("/api/onboarding")
def submit_onboarding(config: OnboardingConfig):
    return {
        "status": "success",
        "message": "Configuration received successfully",
        "data": config
    }