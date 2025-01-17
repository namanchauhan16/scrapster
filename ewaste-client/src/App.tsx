import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Loginpage";
import Register from "./Pages/Registerpage";
import Contactpage from "./Pages/Contactpage";
import Aboutpage from "./Pages/Aboutpage";
import Faqpage from "./Pages/Faqpage";
import UserDashboard from "./Pages/Dashboard/userDashboard";
import RecyclerDashboard from "./Pages/Dashboard/recyclerDashboard";
import Subscriptionpage from "./Pages/Subscriptionpage";
import DarkModeProvider from "./Context/darkmode";

function App() {
  return (
    <>
      <Router>
        <DarkModeProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/contact" element={<Contactpage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/faq" element={<Faqpage />} />
            <Route path="/subscription" element={<Subscriptionpage />} />
            <Route path="/userDashboard" element={<UserDashboard />} />
            <Route path="/recyclerDashboard" element={<RecyclerDashboard />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </DarkModeProvider>
      </Router>
    </>
  );
}

export default App;
