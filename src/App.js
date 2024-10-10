import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration_Page from "./UserPanel/Register";
import Login from "./UserPanel/Login";
import './App.css';
import Home from "./UserPanel/Home";
import React, { useState } from 'react';
import Navbar from './UserPanel/Components/Navbar';
import FeaturesPage from "./UserPanel/FeaturesPage";
import Footer from "./UserPanel/Components/Footer";
import HowItWorks from "./UserPanel/HowItWorks";
import AboutUs from "./UserPanel/Components/AboutUs";
import Integration from "./UserPanel/Integration";

import Dashboard from "./EmployeePanel/Dashboard";

import TeamLeadDashboard from "./TeamLeadPanel/TeamLeadDashboard";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Router>

        <Routes>
          <Route
            path="/register"
            element={
              <>
                <Navbar />
                <Registration_Page />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                {/* <Navbar /> */}
                <Login setIsLoggedIn={setIsLoggedIn} />
                {/* <Footer /> */}
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/features"
            element={
              <>
                <Navbar />
                <FeaturesPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/howitworks"
            element={
              <>
                <Navbar />
                <HowItWorks />
                <Footer />
              </>
            }
          />
          <Route
            path="/aboutus"
            element={
              <>
                <Navbar />
                <AboutUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/integration"
            element={
              <>
                <Navbar />
                <Integration />
                <Footer />
              </>
            }
          />

          {/* employee panel route, where Navbar should not appear */}
          <Route
            path="/employeedashboard"
            element={<Dashboard />}
          />



          {/* team lead panel route, where Navbar should not appear */}
          <Route
            path="/teamleadashboard"
            element={<TeamLeadDashboard />}
          />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
