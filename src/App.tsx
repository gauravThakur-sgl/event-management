import { LandingPage } from "./page/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./page/user/Login";
import { ForgotPassword } from "./page/user/ForgotPassword";
import { Otp } from "./page/user/Otp";
import { ResetPassword } from "./page/user/ResetPassword";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/reset-password" element={<ResetPassword />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
