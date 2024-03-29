import { Route, Routes } from "react-router-dom";
import "./App.css";
import LeadingPage from "./components/landing-page";
import LogIn from "./components/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LeadingPage />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
