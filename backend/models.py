from pydantic import BaseModel, EmailStr
from typing import List, Optional

class Plant(BaseModel):
    name: str
    description: Optional[str]
    address: str
    manager_email: EmailStr

class Asset(BaseModel):
    name: str
    display_name: str
    type: str

class Parameter(BaseModel):
    name: str
    unit: str

class Formula(BaseModel):
    parameter: str
    expression: str

class OnboardingConfig(BaseModel):
    plant: Plant
    assets: List[Asset]
    parameters: List[Parameter]
    formulas: List[Formula]