import React from "react";
import { Col, Container, Row } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div>
      <Container>
      <Navi/>
      <Dashboard/>
      </Container>
    </div>
  );
}

export default App;
