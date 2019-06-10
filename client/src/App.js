import React from "react"
import "./App.css"

import { BrowserRouter, Route, Link } from "react-router-dom"
import OtherPage from "./OtherPage"
import Fib from "./Fib"

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/otherpage">Other Page</Link>
          </div>
        </div>

        <div>
          <Route exact path="/" component={Fib} />
          <Route exact path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
