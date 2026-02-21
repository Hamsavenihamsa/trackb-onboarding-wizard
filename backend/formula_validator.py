import re

def extract_variables(expression: str):
    return re.findall(r"[a-zA-Z_]+", expression)

def validate_formula(expression: str, enabled_params: list):
    referenced = extract_variables(expression)
    missing = [v for v in referenced if v not in enabled_params]

    if missing:
        return {"valid": False, "missing": missing}
    
    return {"valid": True, "missing": []}