import React from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import Card from "./components/Card";
const App = () => {
  return (
    <>
      <Header />

      <Card>
        <Product />
      </Card>
    </>
  );
};

export default App;
