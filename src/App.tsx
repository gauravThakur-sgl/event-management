import { LandingPage } from "./page/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./page/user/Login";
import { ResetPassword } from "./page/user/ResetPassword";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ResetPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
