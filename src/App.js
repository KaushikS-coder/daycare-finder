import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeaturedDaycares from "./components/FeaturedDaycares";
import DaycareDetails from "./pages/DaycareDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeaturedDaycares />} />
        <Route path="/details/:id" element={<DaycareDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

