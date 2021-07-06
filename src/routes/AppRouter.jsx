import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "../Components/Container";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Container />
      <Footer />
    </Router>
  );
};

export default AppRouter;
