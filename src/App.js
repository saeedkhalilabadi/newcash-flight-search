import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import routes from "./router";


const getRoutes = (allRoutes) =>
  allRoutes.map((route) => {
    if (route.route) {
      return <Route path={route.route} Component={route.component} key={route.key} />;
    }
    return null;
  });

function App() {
  return (
    <div className="App">
      <Suspense >
        <BrowserRouter>
          <Routes>
            {getRoutes(routes)}
            <Route path="*" element={<Navigate to="/flightSearch" replace />} />
          </Routes>
        </BrowserRouter>
      </Suspense >
    </div>
  );
}

export default App;
