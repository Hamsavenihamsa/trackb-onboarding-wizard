import { submitOnboarding } from "../api"

function Step5Review({ data, back }) {

  const submit = async () => {
    const res = await submitOnboarding(data)
    alert(res.data.message)
  }

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <button onClick={back}>Back</button>
      <button onClick={submit}>Submit</button>
    </>
  )
}

export default Step5Review