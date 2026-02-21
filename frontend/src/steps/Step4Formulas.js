import { useState } from "react"
import { validateFormula } from "../api"

function Step4Formulas({ data, setData, next, back }) {
  const [expression, setExpression] = useState("")
  const [error, setError] = useState("")

  const validate = async () => {
    const enabled = data.parameters.map(p => p.name)

    const res = await validateFormula({
      expression,
      enabled_params: enabled
    })

    if (!res.data.valid) {
      setError("Missing: " + res.data.missing.join(", "))
    } else {
      setError("")
      setData({
        ...data,
        formulas: [{ parameter: "efficiency", expression }]
      })
      alert("Valid formula")
    }
  }

  return (
    <>
      <input placeholder="Enter Formula"
        onChange={e=>setExpression(e.target.value)} />

      <button onClick={validate}>Validate</button>

      {error && <p style={{color:"red"}}>{error}</p>}

      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </>
  )
}

export default Step4Formulas