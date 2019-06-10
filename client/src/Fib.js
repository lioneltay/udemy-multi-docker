import React, { useState, useEffect } from "react"
import axios from "axios"

const Fib = () => {
  const [seenIndexes, setSeenIndex] = useState([])
  const [values, setValues] = useState({})
  const [index, setIndex] = useState("")

  const fetchValues = async () => {
    const values = await axios.get("/api/values/current")
    setValues(values.data)
  }

  const fetchIndexes = async () => {
    const seenIndexes = await axios.get("/api/values/all")
    setSeenIndex(seenIndexes.data)
  }

  useEffect(() => {
    fetchValues()
    fetchIndexes()
  }, [])

  return (
    <div>
      <h1>The application</h1>
      <form
        onSubmit={async e => {
          e.preventDefault()
          await axios.post("/api/values", { index })
          setIndex("")
        }}
      >
        <label>Enter you index:</label>
        <input value={index} onChange={e => setIndex(e.target.value)} />
        <button>Submit</button>
      </form>

      <h3>Indexes I have seen:</h3>
      {seenIndexes.map(({ number }) => number).join(", ")}

      <h3>Calculated Values:</h3>
      {Object.keys(values).map(key => (
        <div key={key}>
          For index {key} I calculated {values[key]}
        </div>
      ))}
    </div>
  )
}

export default Fib
