import { useEffect } from "react"
import { getParameters } from "../api"

function Step3Parameters({ data, setData, next, back }) {

  useEffect(() => {
    getParameters().then(res => {
      setData(prev => ({ ...prev, registry: res.data }))
    })
  }, [])

  const toggle = (param) => {
    const exists = data.parameters.find(p => p.name === param.name)

    if (exists) {
      setData({
        ...data,
        parameters: data.parameters.filter(p => p.name !== param.name)
      })
    } else {
      setData({
        ...data,
        parameters: [...data.parameters, param]
      })
    }
  }

  return (
    <>
      {data.registry?.map((p,i)=>(
        <div key={i}>
          <input type="checkbox" onChange={()=>toggle(p)}/>
          {p.name} ({p.unit})
        </div>
      ))}

      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </>
  )
}

export default Step3Parameters