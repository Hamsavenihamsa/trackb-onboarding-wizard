import { useState } from "react"

function Step2Assets({ data, setData, next, back }) {
  const [asset, setAsset] = useState({ name:"", display_name:"", type:"" })

  const addAsset = () => {
    if (!asset.name || !asset.display_name || !asset.type) {
      alert("Fill all fields")
      return
    }

    if (data.assets.find(a => a.name === asset.name)) {
      alert("Duplicate asset")
      return
    }

    setData({ ...data, assets: [...data.assets, asset] })
    setAsset({ name:"", display_name:"", type:"" })
  }

  return (
    <>
      <input placeholder="Asset Name" value={asset.name}
        onChange={e=>setAsset({...asset,name:e.target.value})}/>
      <input placeholder="Display Name" value={asset.display_name}
        onChange={e=>setAsset({...asset,display_name:e.target.value})}/>
      <input placeholder="Type" value={asset.type}
        onChange={e=>setAsset({...asset,type:e.target.value})}/>

      <button onClick={addAsset}>Add</button>

      <ul>
        {data.assets.map((a,i)=>
          <li key={i}>{a.display_name}</li>
        )}
      </ul>

      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </>
  )
}

export default Step2Assets