/*dano */
// ### Задача 1: Компонент профиля пользователя
// **Описание:** Создайте компонент `UserProfile`, который принимает
// следующие props: `name`, `age`, `location`. Отображайте эти данные в простом
// шаблоне профиля.
// **Пример использования:**
// ```jsx
// <UserProfile name="John Doe" age={30} location="New York" />
// ```
// **Требования:**
// - Отобразить имя, возраст и местоположение пользователя.
// - Структурируйте вывод данных в понятном формате (например, карточка
// профиля).

/* svoy primer Компонент профиля пользователя */
// import React from "react";

// // const UserProfile = ({ name,age,location }) => {
// const UserProfile = ({ user }) => {
//   return (
//     // 1iy i 2oy sposob
//     // <tr >
//     //   <td>{name}</td>
//     //   <td>{age}</td>
//     //   <td>{location}</td>
//     // </tr>
//     <>
//       {/* 3iy sposob */}
//       {user.map((item) => {
//         return (
//           <tr key={item.id}>
//             <td>{item.name}</td>
//             <td>{item.age}</td>
//             <td>{item.location}</td>
//           </tr>
//         );
//       })}
//     </>
//   );
// };

// export default UserProfile;

import React from "react";

const UserProfile = ({ name, age, location }) => {
  return (
    <>
      <h1>UserProfile</h1>
      <p>Name- {name}</p>
      <p>Age- {age}</p>
      <p>Location- {location}</p>
    </>
  );
};

export default UserProfile;
