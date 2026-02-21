import axios from "axios"

const API = "http://127.0.0.1:8000"

export const getParameters = () =>
  axios.get(`${API}/api/parameters`)

export const validateFormula = (data) =>
  axios.post(`${API}/api/validate-formula`, data)

export const submitOnboarding = (data) =>
  axios.post(`${API}/api/onboarding`, data)