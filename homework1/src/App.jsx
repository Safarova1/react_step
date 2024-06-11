// import React from "react";
// import UserProfile from "./components/UserProfile";

// const users = [
//   { id: "id-1", name: "John Doe", age: 30, location: "New York" },
//   { id: "id-2", name: "Leo Doe", age: 80, location: "Baku" },
//   { id: "id-3", name: "Lali Doe", age: 23, location: "France" },
// ];

// const App = () => {
//   return (
//     <>
//       {/* Задача 1: Компонент профиля пользователя */}
//       <table>
//         <caption>UserProfile</caption>
//         <thead>
//           <tr>
//             <th>Имя</th>
//             <th>Возраст</th>
//             <th>Местоположение</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* 1 sposob odnoqo cel dobavit */}
//           {/* <UserProfile name="John Doe" age={30} location="New York" />2 sposob */}
//           {/* 2 sposob vsex dobavit */}
//           {/* {users.map((user) => {
//             <UserProfile
//               // id={user.id}
//               name={user.name}
//               age={user.age}
//               location={user.location}
//             />;
//           })} */}
//           {/* 3iy sposob vsex dobavit */}
//           <UserProfile user={users} />
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default App;

/*Задача */
import React from "react";
import UserProfile from "./components/UserProfile";
import TodoList from "./components/TodoList";
import Adder from "./components/Adder";
import ProductCard from "./components/ProductCard";
import ColorSelector from "./components/ColorSelector";

const tasks = [
  { id: "id-1", text: "Buy groceries", completed: false },
  { id: "id-2", text: "Walk the dog", completed: true },
];

const colors = ["red", "green", "blue"];

const App = () => {
  return (
    <>
      {/* zadaca 1 */}
      <div>
        <UserProfile name="John Doe" age={30} location="New York" />
      </div>

      {/* zadaca 2 */}
      <div>
        <h1>TodoList</h1>
        <ul>
          <TodoList tasks={tasks} />
        </ul>
      </div>

      {/* zadaca 3 */}
      <div>
        <Adder num1={5} num2={10} />
      </div>

      {/* zadaca 4 */}
      <div>
        <h1>ProductCard</h1>
        <div id="card">
          <ProductCard
            title="Laptop"
            price={999.99}
            description="A high-performance laptop"
            imageUrl="https://media.wired.com/photos/64daad6b4a854832b16fd3bc/191:100/w_1280,c_limit/How-to-Choose-a-Laptop-August-2023-Gear.jpg"
          />
        </div>
      </div>

      {/* zadaca 5 */}
      <div>
        <h1>Селектор цвета</h1>
        <ColorSelector colors={colors} />
        
      </div>
    </>
  );
};

export default App;
