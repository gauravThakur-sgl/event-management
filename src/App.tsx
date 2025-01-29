import { LandingPage } from "./page/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./page/Login";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
