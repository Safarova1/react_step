import React from "react";
// import Header from "./components/Header";
// import Product from "./components/Product";
import Booklist from "./components/Booklist";

// PRIMER 1
// const App = () => {
//   return (
//     <React.Fragment>
//       <Header isAuto={false} title="zaqolovka" />
//       <h1>Main title</h1>
//       {/* <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Est et,
//         perspiciatis cum ex dolorum aut dolores nemo odio, minima laboriosam
//         dolor suscipit amet dicta vitae eaque deleniti iure, quisquam
//         blanditiis!
//       </p> */}
//       <Product
//         name="T-shirt"
//         description="Lorem ipsum dolor sit"
//         imgsrc="https://ic.pics.livejournal.com/miss_hohotyn007/73968878/4561532/4561532_original.jpg"
//       />

//       <Product
//         name="T-shirt"
//         description="Lorem ipsum dolor sit"
//         imgsrc="https://ic.pics.livejournal.com/miss_hohotyn007/73968878/4561532/4561532_original.jpg"
//       />
//     </React.Fragment>
//   );
// };

// export default App;

// -----------------------------------------------------------------------------------------------
// PRIMER 2 3
// const products = [
//   {
//     title: "Wireless Earbuds",
//     description: "High-quality wireless earbuds with noise-canceling feature.",
//     price: 49.99,
//   },
//   {
//     title: "Smart Watch",
//     description:
//       "Multifunctional smart watch with fitness tracking and notifications.",
//     price: 199.99,
//   },
//   {
//     title: "Bluetooth Speaker",
//     description:
//       "Portable Bluetooth speaker with powerful sound and long battery life.",
//     price: 89.99,
//   },
//   {
//     title: "Gaming Laptop",
//     description:
//       "High-performance gaming laptop with advanced graphics and fast processor.",
//     price: 1299.99,
//   },
//   {
//     title: "4K Ultra HD TV",
//     description:
//       "55-inch 4K Ultra HD TV with smart features and vibrant display.",
//     price: 499.99,
//   },
//   {
//     title: "Fitness Tracker",
//     description:
//       "Wearable fitness tracker with heart rate monitor and activity tracking.",
//     price: 59.99,
//   },
//   {
//     title: "Instant Pot",
//     description:
//       "7-in-1 programmable pressure cooker, slow cooker, rice cooker, and more.",
//     price: 79.99,
//   },
//   {
//     title: "Electric Toothbrush",
//     description:
//       "Rechargeable electric toothbrush with multiple brushing modes.",
//     price: 39.99,
//   },
//   {
//     title: "Noise Cancelling Headphones",
//     description:
//       "Over-ear noise-canceling headphones with high-fidelity sound.",
//     price: 149.99,
//   },
//   {
//     title: "Smart Home Hub",
//     description:
//       "Smart home hub to control your smart devices with voice commands.",
//     price: 129.99,
//   },
// ];

// const App = () => {
//   return (
//     <>
//       <Header isAuto={false} title="zaqolovka" />
//       <h1>Main title</h1>

//       {products.map((product) => (
//         <Product
//           key={product.title}
//           title={product.title}
//           description={product.description}
//           price={product.price}
//         />
//       ))}
//     </>
//   );
// };

// export default App;

// -----------------------------------------------------------------------------------------------
// zadanie 1

// Создать компонент BookList
// Будет рендерить список книг
// Создать компонент для разметки книги
// если массив пустой - нету книг

const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
];

const App = () => {
  return (
    <>
      <h1>Booklist</h1>

      <Booklist book={favouriteBooks} />
    </>
  );
};

export default App;

// zadaca 1 sama rewila
// import React from "react";
// import Header from "./components/Header";
// import Booklist from "./components/Booklist";

// const products = [
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
// ];

// const App = () => {
//   return (
//     <>
//       <Header />
//       <h1>zaqalovka</h1>
//       <Product name="Tshirt" />
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque
//         at a modi temporibus adipisci sequi sapiente nulla reprehenderit
//         perspiciatis dolores enim quidem ipsa voluptas praeseaboriosam
//         cupiditate laudantium recusandae pariatur nulla sio recusandae delectus
//         perspiciatis sed repellendus dicta natus doloremque quisquam accusantium
//         est non laboriosam quas laudantium et alias iusto ea odit dolor dolorum
//         quis! Error itaque vel consequatur!
//       </p>
//       {products.length === 0 ? (
//         <p>net niceqo tut</p>
//       ) : (
//         products.map((pr) => (
//           <Booklist key={pr.name} name={pr.name} price={pr.price} />
//         ))
//       )}
//     </>
//   );
// };

// export default App;
