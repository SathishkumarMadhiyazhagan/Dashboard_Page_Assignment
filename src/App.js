import React from "react";
import DashboardPage from "./pages/DashboardPage.js";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <Container fluid className="app">
      <DashboardPage />
    </Container>
  );
}

export default App;
