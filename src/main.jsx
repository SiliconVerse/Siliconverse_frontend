import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./hooks/userAuth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<App />}
      />
      {/* Use Outlet for shared layout */}
      <Route
        path="/about"
        element={<About />}
      />
      <Route
        path="/intern"
        element={<Interns />}
      />
      <Route
        path="/mission"
        element={<Mission />}
      />
      <Route element={<Layout />}>
        <Route
          path="/profile"
          element={<CompanyProfilePage />}
        />
        <Route
          path="/help"
          element={<HelpCenter />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
