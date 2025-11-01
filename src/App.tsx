import Login from "./components/elements/login/login"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/elements/navbar/navbar"
import Register from "./components/elements/register/register"
import { Toaster } from "sonner"
import Dashboard from "./components/elements/dashboard/dashboard"
function App() {
  return (
    <Router>
      <Navbar />
      <Toaster position="top-center" />
      <Routes>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App