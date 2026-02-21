import { useState } from "react"

function Step1Plant({ data, setData, next }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    address: "",
    manager_email: ""
  })

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleNext = () => {
    if (!form.name || !form.address || !form.manager_email) {
      alert("Fill required fields")
      return
    }

    setData({ ...data, plant: form })
    next()
  }

  return (
    <>
      <input name="name" placeholder="Plant Name" onChange={handleChange}/>
      <input name="description" placeholder="Description" onChange={handleChange}/>
      <input name="address" placeholder="Address" onChange={handleChange}/>
      <input name="manager_email" placeholder="Manager Email" onChange={handleChange}/>

      <button onClick={handleNext}>Next</button>
    </>
  )
}

export default Step1Plant