import { useState } from "react"
import "./styles.css"

import Step1Plant from "./steps/Step1Plant"
import Step2Assets from "./steps/Step2Assets"
import Step3Parameters from "./steps/Step3Parameters"
import Step4Formulas from "./steps/Step4Formulas"
import Step5Review from "./steps/Step5Review"

function App() {
  const [step, setStep] = useState(1)

  const [data, setData] = useState({
    plant: {},
    assets: [],
    parameters: [],
    formulas: []
  })

  const next = () => setStep(step + 1)
  const back = () => setStep(step - 1)

  return (
    <div className="container">
      <h2>Plant Onboarding</h2>
      <h4>Step {step} of 5</h4>

      {step === 1 && <Step1Plant data={data} setData={setData} next={next} />}
      {step === 2 && <Step2Assets data={data} setData={setData} next={next} back={back} />}
      {step === 3 && <Step3Parameters data={data} setData={setData} next={next} back={back} />}
      {step === 4 && <Step4Formulas data={data} setData={setData} next={next} back={back} />}
      {step === 5 && <Step5Review data={data} back={back} />}
    </div>
  )
}

export default App