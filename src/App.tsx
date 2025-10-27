import Login from "./components/elements/login/login"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/elements/navbar/navbar"
import Register from "./components/elements/register/register"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App