import React from "react";
import Header from "./components/Header";
import Product from "./components/Product";

const products = [
  // { name: "Product A", price: 10 },
  // { name: "Product B", price: 20 },
  // { name: "Product C", price: 15 },
  // { name: "Product D", price: 25 },
  // { name: "Product E", price: 30 },
  // { name: "Product F", price: 12 },
  // { name: "Product G", price: 18 },
  // { name: "Product H", price: 22 },
  // { name: "Product I", price: 17 },
  // { name: "Product J", price: 28 },
];

const App = () => {
  return (
    <>
      <Header />
      <h1>zaqalovka</h1>
      <Product name="Tshirt" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque
        at a modi temporibus adipisci sequi sapiente nulla reprehenderit
        perspiciatis dolores enim quidem ipsa voluptas praeseaboriosam
        cupiditate laudantium recusandae pariatur nulla sio recusandae delectus
        perspiciatis sed repellendus dicta natus doloremque quisquam accusantium
        est non laboriosam quas laudantium et alias iusto ea odit dolor dolorum
        quis! Error itaque vel consequatur!
      </p>
      {products.length === 0 ? (
        <p>net niceqo tut</p>
      ) : (
        products.map((pr) => (
          <Product key={pr.name} name={pr.name} price={pr.price} />
        ))
      )}
    </>
  );
};

export default App;
